import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useContext } from "react"
import { PetsContext, SearchContext } from "../context"
import fetchPetList from './fetchPetList';

const SortDropDown = () => {

    //using PetsContext and SearchContext
    const { setPetList } = useContext(PetsContext)
    const { search } = useContext(SearchContext)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const sortOptions = [
        {
            key: 'distance',
            label: 'Distance'
        },
        {
            key: 'recent',
            label: 'Newest Arrivals'
        },
        {
            key: '-recent',
            label: 'Oldest Arrivals'
        }
    ]

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    // handleSortChange makes the api call to fetch pet list with desired sort parameter
    const handleSortChange = (value) => {
        fetchPetList(search.zipcode, search.animalType, `sort=${value}`).then((response) => {
            setPetList(response.animals)
        })
        setAnchorEl(null);
    }

    // handleClose function closes the drop down menu if user clicks out of menu
    const handleClose = () => {
        setAnchorEl(null);
    }

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
                {/* map through sortOptions as MenuItem */}
                {sortOptions.map(so => <MenuItem onClick={() => handleSortChange(so.key)}>{so.label}</MenuItem>)}
            </Menu>
        </div>
    )
}

export default SortDropDown