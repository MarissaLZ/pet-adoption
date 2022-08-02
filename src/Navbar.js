import { AppBar, Toolbar, Stack, Typography } from "@mui/material"
import React from "react"
import { NavItems } from "./NavItems"

export function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography edge="start" variant="h6" component="div">
          APP NAME
        </Typography>
        <Stack direction="row" spacing={3}>
          <NavItems />
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
