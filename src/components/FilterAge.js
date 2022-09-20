import React from "react"
import { useContext } from "react"
import { FurrdoptionContext } from "../FurrdoptionProvider"
import { fetchPetList } from "./petFinderAPI"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"

const FilterAge = () => {
  const {
    handleSearch,
    search,
    pageNumber,
    setPageCount,
    setPetList,
    setIsLoading,
  } = useContext(FurrdoptionContext)

  const filterOptionsAge = [
    {
      key: "baby",
      label: "Baby",
    },
    {
      key: "young",
      label: "Young",
    },
    {
      key: "adult",
      label: "Adult",
    },
    {
      key: "senior",
      label: "Senior",
    },
  ]

  // handleSortChange makes the api call to fetch pet list with desired sort parameter
  const handleFilterChange = (e) => {
    setIsLoading(true)
    let changeAgeParams = {
      target: {
        name: "filterAgeOption",
        value: e.target.value,
      },
    }
    //seting search.sortOption
    handleSearch(changeAgeParams)

    fetchPetList(
      search.animalType,
      search.zipcode,
      search.sortOption,
      search.filterGenderOption,
      search.filterSizeOption,
      e.target.value,
      pageNumber
    ).then((response) => {
      setPetList(response.animals)
      setPageCount(response.pagination.total_pages)
      setIsLoading(false)
    })
  }

  return (
    <div>
      <FormControl variant="standard" sx={{ minWidth: 150 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={search.filterAgeOption}
          label="Age"
          onChange={handleFilterChange}
        >
          {/* map through sortOptions as MenuItem */}
          {filterOptionsAge.map((filterAgeOption) => (
            <MenuItem
              key={filterAgeOption.key}
              value={filterAgeOption.key}
              name={filterAgeOption.key}
            >
              {filterAgeOption.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default FilterAge
