import React from "react"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Fade from "@mui/material/Fade"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { useContext } from "react"
import { FurrdoptionContext } from "../FurrdoptionProvider"
import { fetchPetList } from "./petFinderAPI"

const FilterSize = () => {
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

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  // handleSortChange makes the api call to fetch pet list with desired sort parameter
  const handleFilterChange = (size) => {
    setIsLoading(true)
    let changeSizeParams = {
      target: {
        name: "filterSizeOption",
        value: size,
      },
    }
    //seting search.sortOption
    handleSearch(changeSizeParams)
    setAnchorEl(null)

    fetchPetList(
      search.animalType,
      search.zipcode,
      search.sortOption, // sort option
      search.filterGenderOption,
      size,
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
        Size
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
        {filterOptionsSize.map((filterSizeOption) => (
          <MenuItem
            key={filterSizeOption.key}
            onClick={() => handleFilterChange(filterSizeOption.key)}
            sx={{ width: "120px" }}
          >
            {filterSizeOption.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default FilterSize
