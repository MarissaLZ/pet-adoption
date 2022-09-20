import React from "react"
import MenuItem from "@mui/material/MenuItem"
import { useContext } from "react"
import { FurrdoptionContext } from "../FurrdoptionProvider"
import { fetchPetList } from "./petFinderAPI"
import { FormControl } from "@mui/material"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"

const FilterSize = () => {
  const {
    handleSearch,
    search,
    pageNumber,
    setPageCount,
    setPetList,
    setIsLoading,
  } = useContext(FurrdoptionContext)

  const filterOptionsSize = [
    {
      key: "small",
      label: "Small",
    },
    {
      key: "medium",
      label: "Medium",
    },
    {
      key: "large",
      label: "Large",
    },
    {
      key: "xlarge",
      label: "Xlarge",
    },
  ]

  // handleSortChange makes the api call to fetch pet list with desired sort parameter
  const handleFilterChange = (e) => {
    setIsLoading(true)
    let changeSizeParams = {
      target: {
        name: "filterSizeOption",
        value: e.target.value,
      },
    }
    //seting search.sortOption
    handleSearch(changeSizeParams)

    fetchPetList(
      search.animalType,
      search.zipcode,
      search.sortOption, // sort option
      search.filterGenderOption,
      e.target.value,
      search.filterAgeOption,
      pageNumber //pageNumber
    ).then((response) => {
      setPetList(response.animals)
      setPageCount(response.pagination.total_pages)
      setIsLoading(false)
    })
  }

  return (
    <div>
      <FormControl variant="standard" sx={{ minWidth: 150 }}>
        <InputLabel id="demo-simple-select-standard-label">Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={search.filterSizeOption}
          label="Size"
          onChange={handleFilterChange}
        >
          {filterOptionsSize.map((filterSizeOption) => (
            <MenuItem
              key={filterSizeOption.key}
              value={filterSizeOption.key}
              name={filterSizeOption.key}
            >
              {filterSizeOption.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default FilterSize
