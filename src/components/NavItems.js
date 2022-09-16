import React from "react"
import { Button } from "@mui/material"
import { DropDown } from "./DropDown"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { FurrdoptionContext } from "../FurrdoptionProvider"
import Logout from "./Logout"
import Avatar from "@mui/material/Avatar"
import PetsIcon from "@mui/icons-material/Pets"
import firebase from "../Firebase/FirebaseConfig"
import { teal } from "@mui/material/colors"

export function NavItems() {
  //import context
  const { isLoggedIn, name, setName } = useContext(FurrdoptionContext)

  //contains link names for the navbar items and the dropdown menus
  const navItems = [
    { navLinks: "Adopt", menuLinks: [] },
    { navLinks: "Volunteer", menuLinks: [] },
    { navLinks: "Donate", menuLinks: [] },
    { navLinks: "About", menuLinks: [] },
  ]

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

  //Retrieves user collection from firebase and maps through to find matching user's email
  const getName = () => {
    const user = firebase.auth().currentUser
    if (user) {
      firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            setName(doc.data().firstName)
          } else {
            return null
          }
        })
    } else {
      return null
    }
  }

  getName()

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
  )
}
