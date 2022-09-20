import {
  AppBar,
  Toolbar,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import { NavItems } from "./NavItems"
import NavDrawer from "./NavDrawer"
import { useTheme, Button } from "@mui/material"
import Avatar from "@mui/material/Avatar"
import PetsIcon from "@mui/icons-material/Pets"
import { teal } from "@mui/material/colors"
import Logout from "./Logout"
import { DropDown } from "./DropDown"

import { useContext } from "react"
import { FurrdoptionContext } from "../FurrdoptionProvider"

export function Navbar() {
  const { isLoggedIn, name } = useContext(FurrdoptionContext)
  const theme = useTheme()
  //returns bool
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))

  const loggedInItems = [
    {
      navLinks: `${name}`,
      icon: (
        <Avatar sx={{ bgcolor: teal[500] }} alt="avatar">
          {" "}
          <PetsIcon />
        </Avatar>
      ),
      menuLinks: ["Profile", "Favorites", <Logout />],
    },
  ]

  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {isMatch ? (
          <>
            <NavDrawer />
            {!isLoggedIn ? (
              <Button key="login" color="inherit">
                <Link
                  to={`/Login`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Login
                </Link>
              </Button>
            ) : (
              loggedInItems.map((item) => (
                <DropDown
                  key={item.navLinks}
                  navLink={item.navLinks}
                  menuLinks={item.menuLinks}
                  icon={item.icon}
                />
              ))
            )}
          </>
        ) : (
          <>
            <Typography
              edge="start"
              variant="h6"
              component="div"
              sx={{
                fontFamily: "Dark",
                fontSize: 35,
                letterSpacing: 4,
              }}
            >
              <Link
                to="/Home"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                FURRDOPTION
              </Link>
            </Typography>
            <Stack direction="row" spacing={3}>
              <NavItems />
            </Stack>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}
