import React from "react"
import { Button } from "@mui/material"
import { DropDown } from "./DropDown"
import { Link } from "react-router-dom"
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined"
import { useContext } from "react"
import { FurrdoptionContext } from "../FurrdoptionProvider"
import Logout from "./Logout"
import Avatar from "@mui/material/Avatar"
import PetsIcon from "@mui/icons-material/Pets"
import firebase from "../Firebase/FirebaseConfig"

export function NavItems() {
  //import context
  const { isLoggedIn, setIsLoggedIn, userProfile, name, setName } =
    useContext(FurrdoptionContext)
  const userEmail = userProfile.email

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
        <Avatar src="/broken-image.jpg" alt="">
          {" "}
          <PetsIcon />
        </Avatar>
      ),
      menuLinks: ["Profile", "Favorites", <Logout />],
    },
  ]

  //Retrieves user collection from firebase and maps through to find matching user's email
  const getName = () => {
    firebase
      .firestore()
      .collection("users")
      .onSnapshot((snap) => {
        const userInfo = snap.docs.map((doc) => ({
          email: doc.email,
          ...doc.data(),
        }))
        userInfo.map((user) => {
          if (user.email === userEmail) {
            const userFirstName = user.firstName
            setName(userFirstName)
          }
        })
      })
  }
  getName()
  //adds favorite to nav if user is logged in
  // if (isLoggedIn) {
  //   navItems.push({ navLinks: "Favorites", menuLinks: [] })
  // }

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
              {/* {item.navLinks === "Favorites" ? (
                <FavoriteOutlinedIcon />
              ) : (
                item.navLinks
              )} */}

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
