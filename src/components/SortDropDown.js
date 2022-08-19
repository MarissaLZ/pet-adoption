import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useContext } from "react"
import { PetsContext } from "../context"
import sortPetList from './sortPetList';

const SortDropDown = () => {

    const { setPetList } = useContext(PetsContext)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    // This function needs to do the api call
    const handleClose = () => {
        sortPetList().then((response) => {
            console.log("SORT", response)
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
                <MenuItem onClick={handleClose}>Distance</MenuItem>
                <MenuItem onClick={handleClose}>Newest Arrivals</MenuItem>
                <MenuItem onClick={handleClose}>Oldest Arrivals</MenuItem>
            </Menu>
        </div>
    )
}

export default SortDropDown