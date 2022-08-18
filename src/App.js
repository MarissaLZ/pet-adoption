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
import Signup from "./pages/Signup"
import { UserContext, PetsContext } from "./context"

function App() {
  //login state can be used for conditional redering to swap login link for user page link or favorites page link and userProfile info can be used to populate infor with other forms
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [userProfile, setUserProfile] = React.useState([])
  //List of pets from Petfinder API used in PetList component, initialized as an empty array
  const [petList, setPetList] = React.useState([])
  const [isFavoritedList, setIsFavoritedList] = React.useState([])

  console.log("isLoggedIn", isLoggedIn)
  console.log(userProfile)

  return (
    <div className="App">
      <UserContext.Provider
        value={{ isLoggedIn, setIsLoggedIn, userProfile, setUserProfile }}
      >
        <PetsContext.Provider
          value={{ petList, setPetList, isFavoritedList, setIsFavoritedList }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="adopt" element={<Adopt />} />
            <Route path="volunteer" element={<Volunteer />} />
            <Route path="donate" element={<Donate />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="Signup" element={<Signup />} />
          </Routes>
          <Footer />
        </PetsContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App
