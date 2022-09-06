import React from "react"
import { Typography } from "@mui/material"
import firebase from "../Firebase/FirebaseConfig"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { FurrdoptionContext } from "../FurrdoptionProvider"

const Logout = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(FurrdoptionContext)

  //navigate hook redirects from logout to home page
  const navigate = useNavigate()

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setIsLoggedIn(!isLoggedIn)
        navigate("login")
      })
      .catch((error) => {
        console.log("Could not log out", error)
      })
  }
  return (
    <Typography onClick={handleLogout}>
      Logout
    </Typography>
  )
}

export default Logout
