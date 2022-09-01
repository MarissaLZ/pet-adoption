import React from "react"
import { Button } from "@mui/material"
import { DropDown } from "./DropDown"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../context"
import Logout from "./Logout"
import { Link as RouterLink, Navigate } from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import PetsIcon from '@mui/icons-material/Pets';

export function NavItems() {
  //import context
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)

  //contains link names for the navbar items and the dropdown menus
  const navItems = [
    { navLinks: "Adopt", menuLinks: [] },
    { navLinks: "Volunteer", menuLinks: [] },
    { navLinks: "Donate", menuLinks: [] },
    { navLinks: "About", menuLinks: [] },
  ]

  const loggedInItems = [
    {
      navLinks: "Name",
      icon: <Avatar src="/broken-image.jpg" alt="" > <PetsIcon /></Avatar>,
      menuLinks: ["Profile", "Favorites", <Logout />]
    },
  ]
  return (
    <>
      {/* generates a link with a dropdown menu or a link with no dropdown */}
      {navItems.map((item) =>
        item.menuLinks.length > 0 ? (
          <DropDown
            key={item.navLinks}
            navLink={item.navLinks}
            menuLinks={item.menuLinks}
          />
        ) : (
          <Button key={item.navLinks} color="inherit">
            <Link
              to={`/${item.navLinks}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {item.navLinks}
            </Link>
          </Button>
        )
      )}
      {/* Toggels between "Login" or user drop down*/}
      {!isLoggedIn ?
        <Button key="login" color="inherit">
          <Link
            to={`/Login`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Login
          </Link>
        </Button> :
        loggedInItems.map((item) => (
          <DropDown
            key={item.navLinks}
            navLink={item.navLinks}
            menuLinks={item.menuLinks}
            icon={item.icon}
          />
        ))
      }
    </>
  )
}
