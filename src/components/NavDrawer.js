import React from "react"
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Stack,
  Box,
  Divider,
  Typography,
} from "@mui/material"
import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import { Link as RouterLink } from "react-router-dom"
import PetsIcon from "@mui/icons-material/Pets"
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism"
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import HomeIcon from "@mui/icons-material/Home"

const NavDrawer = () => {
  const [open, setOpen] = React.useState(false)
  const navItems = [
    { icon: <HomeIcon />, navLinks: "Home", menuLinks: [] },
    { icon: <PetsIcon />, navLinks: "Adopt", menuLinks: [] },
    { icon: <VolunteerActivismIcon />, navLinks: "Volunteer", menuLinks: [] },
    { icon: <CardGiftcardIcon />, navLinks: "Donate", menuLinks: [] },
    { icon: <FavoriteBorderIcon />, navLinks: "About", menuLinks: [] },
  ]

  return (
    <>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Typography
          edge="start"
          variant="h6"
          component="div"
          sx={{
            fontFamily: "Dark",
            fontSize: 28,
            letterSpacing: 2,
            margin: "1rem 0 0.5rem 1rem",
            color: "#ff8a65",
          }}
        >
          FURRDOPTION
        </Typography>
        <Divider />
        <List sx={{ marginTop: "1rem" }}>
          {navItems.map((item) => (
            <ListItemButton
              key={item.navLinks}
              color="inherit"
              onClick={() => setOpen(false)}
            >
              <ListItemIcon>
                <ListItemText>
                  <RouterLink
                    to={`/${item.navLinks}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Stack
                      direction="row"
                      spacing={3}
                      sx={{ margin: "0 3rem 0 1rem" }}
                    >
                      <Box>{item.icon}</Box>
                      <Box>{item.navLinks}</Box>
                    </Stack>
                  </RouterLink>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
        <Divider />
      </Drawer>
      <IconButton onClick={() => setOpen(!open)}>
        <MenuRoundedIcon style={{ color: "white" }}></MenuRoundedIcon>
      </IconButton>
    </>
  )
}

export default NavDrawer
