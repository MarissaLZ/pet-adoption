import React from "react"
import { Button } from "@mui/material"
import { DropDown } from "./DropDown"
import { Link } from "react-router-dom"
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined"
import { useContext } from "react"
import { UserContext } from "../context"

export function NavItems() {
  //import context
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext)

  //contains link names for the navbar items and the dropdown menus
  const navItems = [
    { navLinks: "Adopt", menuLinks: [] },
    { navLinks: "Volunteer", menuLinks: [] },
    { navLinks: "Donate", menuLinks: [] },
    { navLinks: "About", menuLinks: [] },
    { navLinks: "Login", menuLinks: [] },
  ]

  //adds favorite to nav if user is logged in
  if (isLoggedIn) {
    navItems.push({ navLinks: "Favorites", menuLinks: [] })
  }

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
              {item.navLinks === "Favorites" ? (
                <FavoriteOutlinedIcon />
              ) : (
                item.navLinks
              )}

              {/* {item.navLinks} */}
            </Link>
          </Button>
        )
      )}
      {/* uncomment this line to test <Logout/>. Button is temporary */}
      {/* {isLoggedIn && <Logout />} */}
    </>
  )
}
