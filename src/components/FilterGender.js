import React from "react"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Fade from "@mui/material/Fade"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { useContext } from "react"
import { FurrdoptionContext } from "../FurrdoptionProvider"
import { fetchPetList } from "./petFinderAPI"

const FilterGender = () => {
  const {
    handleSearch,
    search,
    pageNumber,
    setPageCount,
    setPetList,
    setIsLoading,
  } = useContext(FurrdoptionContext)

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

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

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  // handleSortChange makes the api call to fetch pet list with desired sort parameter
  const handleFilterChange = (gender) => {
    setIsLoading(true)
    let changeGenderParams = {
      target: {
        name: "filterGenderOption",
        value: gender,
      },
    }
    //seting search.sortOption
    handleSearch(changeGenderParams)
    setAnchorEl(null)

    fetchPetList(
      search.animalType,
      search.zipcode,
      search.sortOption, // sort option
      gender,
      search.filterSizeOption,
      search.filterAgeOption,
      pageNumber //pageNumber
    ).then((response) => {
      setPetList(response.animals)
      setPageCount(response.pagination.total_pages)
      setIsLoading(false)
    })
  }

  // handleClose function closes the drop down menu if user clicks out of menu
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        variant="outlined"
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ width: "120px" }}
      >
        Gender
      </Button>
      <Menu
        id="fade-menu"
        className="menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {/* map through sortOptions as MenuItem */}
        {filterOptionsGender.map((filterGenderOption) => (
          <MenuItem
            key={filterGenderOption.key}
            onClick={() => handleFilterChange(filterGenderOption.key)}
            sx={{ width: "120px" }}
          >
            {filterGenderOption.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default FilterGender
