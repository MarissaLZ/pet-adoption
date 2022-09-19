import React from "react"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Fade from "@mui/material/Fade"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { useContext } from "react"
import { FurrdoptionContext } from "../FurrdoptionProvider"
import { fetchPetList } from "./petFinderAPI"
import Grid2 from "@mui/material/Unstable_Grid2/Grid2"

const FilterAge = () => {
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

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  }

  // handleSortChange makes the api call to fetch pet list with desired sort parameter
  const handleFilterChange = (age) => {
    setIsLoading(true)
    let changeAgeParams = {
      target: {
        name: "filterAgeOption",
        value: age,
      },
    }
    //seting search.sortOption
    handleSearch(changeAgeParams)
    setAnchorEl(null)

    fetchPetList(
      search.animalType,
      search.zipcode,
      search.sortOption,
      search.filterGenderOption,
      search.filterSizeOption,
      age,
      pageNumber
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

  console.log("search state", search)

  return (
    <div>
      <Grid2 container>
        <Grid2 xs={4} xsOffset={4} md={4} mdOffset="auto">
          <Button
            variant="outlined"
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Age
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
            {filterOptionsAge.map((filterAgeOption) => (
              <MenuItem
                key={filterAgeOption.key}
                onClick={() => handleFilterChange(filterAgeOption.key)}
              >
                {filterAgeOption.label}
              </MenuItem>
            ))}
          </Menu>
        </Grid2>
      </Grid2>
    </div>
  )
}

export default FilterAge
