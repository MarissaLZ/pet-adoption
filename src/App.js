import "./App.css"
import { Routes, Route } from "react-router-dom"
import React from "react"
import { Navbar } from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home.js"
import Adopt from "./pages/Adopt"
import Volunteer from "./pages/Volunteer"
import Donate from "./pages/Donate"
import About from "./pages/About"
import Login from "./pages/Login"
import PetBio from "./pages/PetBio"

function App() {
  //login state can be used for conditional redering to swap login link for user page link or favorites page link and userProfile info can be used to populate infor with other forms
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [userProfile, setUserProfile] = React.useState([])

  const handleLogin = (user) => {
    setIsLoggedIn(true)
    setUserProfile(user)
  }

  console.log(isLoggedIn)
  console.log(userProfile)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="adopt" element={<Adopt />} />
        <Route path="volunteer" element={<Volunteer />} />
        <Route path="donate" element={<Donate />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/Adopt/petbio" element={<PetBio />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
