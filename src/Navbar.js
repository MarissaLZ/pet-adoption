import { AppBar, Toolbar, Stack, Typography, Button } from "@mui/material"
import React from "react"

export function Navbar() {
  const navItems = ["Adopt", "Volunteer", "Donate", "About"]

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography edge="start" variant="h6" component="div">
          APP NAME
        </Typography>
        <Stack direction="row" spacing={3}>
          {navItems.map((item) => (
            <Button key={item} color="inherit">
              {item}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
