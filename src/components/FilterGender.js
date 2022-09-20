import React from "react"
import MenuItem from "@mui/material/MenuItem"
import { useContext } from "react"
import { FurrdoptionContext } from "../FurrdoptionProvider"
import { fetchPetList } from "./petFinderAPI"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

const FilterGender = () => {
  const {
    handleSearch,
    search,
    pageNumber,
    setPageCount,
    setPetList,
    setIsLoading,
  } = useContext(FurrdoptionContext)

  const filterOptionsGender = [
    {
      key: "male",
      label: "Male",
    },
    {
      key: "female",
      label: "Female",
    },
  ]

  // handleSortChange makes the api call to fetch pet list with desired sort parameter
  const handleFilterChange = (e) => {
    setIsLoading(true)
    let changeGenderParams = {
      target: {
        name: "filterGenderOption",
        value: e.target.value,
      },
    }
    //seting search.sortOption
    handleSearch(changeGenderParams)

    fetchPetList(
      search.animalType,
      search.zipcode,
      search.sortOption, // sort option
      e.target.value,
      search.filterSizeOption,
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
        <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={search.filterGenderOption}
          label="Gender"
          onChange={handleFilterChange}
        >
          {/* map through sortOptions as MenuItem */}
          {filterOptionsGender.map((filterGenderOption) => (
            <MenuItem
              key={filterGenderOption.key}
              value={filterGenderOption.key}
              name={filterGenderOption.key}
            >
              {filterGenderOption.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default FilterGender
