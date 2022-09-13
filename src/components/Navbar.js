import { AppBar, Toolbar, Stack, Typography } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import { NavItems } from "./NavItems"

export function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ width: "100%", justifyContent: "space-between" }}>
        <Typography edge="start" variant="h6" component="div">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            FURRDOPTION
          </Link>
        </Typography>
        <Stack direction="row" spacing={3}>
          <NavItems />
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
