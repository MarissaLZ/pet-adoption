import React from "react"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Fade from "@mui/material/Fade"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { useContext } from "react"
import { FurrdoptionContext } from "../FurrdoptionProvider"
import { fetchPetList } from "./petFinderAPI"

const SortDropDown = () => {
  const { handleSearch, search, pageNumber, setPageCount, setPetList } =
    useContext(FurrdoptionContext)

  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

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

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  // handleSortChange makes the api call to fetch pet list with desired sort parameter
  const handleSortChange = (option) => {
    let changeSortParams = {
      target: {
        name: "sortOption",
        value: option,
      },
    }
    //seting search.sortOption
    handleSearch(changeSortParams)
    setAnchorEl(null)

    fetchPetList(
      search.zipcode,
      search.animalType,
      option, // sort option
      pageNumber //pageNumber
    ).then((response) => {
      setPetList(response.animals)
      setPageCount(response.pagination.total_pages)
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
      >
        Sort
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {/* map through sortOptions as MenuItem */}
        {sortOptions.map((option) => (
          <MenuItem
            key={option.key}
            onClick={() => handleSortChange(option.key)}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default SortDropDown
