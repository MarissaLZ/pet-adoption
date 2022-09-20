import React from "react"
import MenuItem from "@mui/material/MenuItem"
import { useContext } from "react"
import { FurrdoptionContext } from "../FurrdoptionProvider"
import { fetchPetList } from "./petFinderAPI"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

const SortDropDown = () => {
  const {
    handleSearch,
    search,
    pageNumber,
    setPageCount,
    setPetList,
    setIsLoading,
  } = useContext(FurrdoptionContext)

  const sortOptions = [
    {
      key: "distance",
      label: "Distance",
    },
    {
      key: "recent",
      label: "Newest Arrivals",
    },
    {
      key: "-recent",
      label: "Oldest Arrivals",
    },
  ]

  // handleSortChange makes the api call to fetch pet list with desired sort parameter
  const handleSortChange = (e) => {
    //e.target.value is the current sort option selected
    setIsLoading(true)
    let changeSortParams = {
      target: {
        name: "sortOption",
        value: e.target.value,
      },
    }
    //seting search.sortOption
    handleSearch(changeSortParams)
    fetchPetList(
      search.animalType,
      search.zipcode,
      e.target.value, // sort option
      search.filterGenderOption,
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
    <div style={{ margin: "4rem 2rem 2rem 0" }}>
      <Grid2 container>
        <Grid2 xsOffset={10} mdOffset="auto">
          <FormControl variant="standard" sx={{ minWidth: 200 }}>
            <InputLabel id="demo-simple-select-standard-label">Sort</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={search.sortOption}
              label="Sort"
              onChange={handleSortChange}
            >
              {/* map through sortOptions as MenuItem */}
              {sortOptions.map((option) => (
                <MenuItem key={option.key} value={option.key} name={option.key}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid2>
      </Grid2>
    </div>
  )
}

export default SortDropDown
