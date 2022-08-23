import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useContext } from "react"
import { PetsContext, SearchContext } from "../context"
import sortPetList from './sortPetList';

const SortDropDown = () => {

    //using PetsContext and SearchContext
    const { setPetList } = useContext(PetsContext)
    const { search } = useContext(SearchContext)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    // handleClose function closes the drop down menu if user clicks out of menu
    const handleClose = () => {
        setAnchorEl(null);
    }

    // This function makes the api call with distance parameter (closest in location to user)
    const handleCloseDistance = () => {
        sortPetList(search.animalType, search.zipcode, "sort=distance").then((response) => {
            console.log("SORT distance", response)
            setPetList(response.animals)
        })
        setAnchorEl(null);
    };

    // This function makes the api call with recent parameter (newly added to database) This is the default to regular api call
    const handleCloseNew = () => {
        sortPetList(search.animalType, search.zipcode, "sort=recent").then((response) => {
            console.log("SORT newest", response)
            setPetList(response.animals)
        })
        setAnchorEl(null);
    };

    // This function makes the api call with -recent parameter (oldest in database)
    const handleCloseOld = () => {
        sortPetList(search.animalType, search.zipcode, "sort=-recent").then((response) => {
            console.log("SORT oldest", response)
            setPetList(response.animals)
        })
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                variant="outlined"
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Sort
            </Button>
            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleCloseDistance}>Distance</MenuItem>
                <MenuItem onClick={handleCloseNew}>Newest Arrivals</MenuItem>
                <MenuItem onClick={handleCloseOld}>Oldest Arrivals</MenuItem>
            </Menu>
        </div>
    )
}

export default SortDropDown