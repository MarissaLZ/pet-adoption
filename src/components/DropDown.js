import { Button, Menu, MenuItem } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom";

export function DropDown({ navLink, menuLinks, icon }) {
  //state for the menu dropdown
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        color="inherit"
        id="navButton"
        aria-controls={open ? "menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={icon ? icon : ""}
      >
        {navLink}
      </Button>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "navButton",
        }}
      >
        {/* generates the dropdown menu links */}
        {menuLinks.map((link) => (
          <Link to={link} key={link} style={{ textDecoration: 'none' }}>
            <MenuItem onClick={handleClose}>
              {link}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  )
}
