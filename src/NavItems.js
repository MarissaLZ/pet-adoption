import React from "react"
import { Button } from "@mui/material"
import { DropDown } from "./DropDown"

export function NavItems() {
  //contains link names for the navbar items and the dropdown menus
  const navItems = [
    { navLinks: "Adopt", menuLinks: ["Cats", "Dogs"] },
    { navLinks: "Volunteer", menuLinks: [] },
    { navLinks: "Donate", menuLinks: [] },
    { navLinks: "About", menuLinks: [] },
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
            {item.navLinks}
          </Button>
        )
      )}
    </>
  )
}
