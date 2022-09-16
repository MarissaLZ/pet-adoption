import { Button, Menu, MenuItem } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

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
        sx={{ minWidth: 150, px: 0 }}
      >
        {navLink}
        {/* the user name */}
      </Button>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "navButton",
        }}
        PaperProps={{
          style: {
            width: 150,
          },
        }}
      >
        {/* generates the dropdown menu links */}
        {menuLinks.map((link) => (
          <MenuItem key={link} onClick={handleClose}>
            <Link
              to={link}
              style={{ textDecoration: "none", color: "#26A69A" }}
            >
              {link}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
