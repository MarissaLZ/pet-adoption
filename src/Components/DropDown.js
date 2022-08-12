import { Button, Menu, MenuItem } from "@mui/material"
import React from "react"

export function DropDown({ navLink, menuLinks }) {
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
          <MenuItem key={link} onClick={handleClose}>
            {link}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
