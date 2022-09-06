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
import PetBio from "./pages/PetBio"
import Favorites from "./pages/Favorites"
import { UserContext, PetsContext, SearchContext } from "./context"
import { themeOptions } from "./Styles/themeOptions"
import { ThemeProvider } from "@mui/material/styles"
function App() {
  //login state can be used for conditional redering to swap login link for user page link or favorites page link and userProfile info can be used to populate infor with other forms
  const [isLoggedIn, setIsLoggedIn] = React.useState(true)
  const [userProfile, setUserProfile] = React.useState([])
  const [petList, setPetList] = React.useState([])
  const [pageNumber, setPageNumber] = React.useState(1)
  const [pageCount, setPageCount] = React.useState(10)
  const [isFavoritedList, setIsFavoritedList] = React.useState([])
  const [search, setSearch] = React.useState({
    zipcode: "",
    animalType: "",
    sortOption: "",
  })

  const handleSearch = (e) => {
    setSearch({
      ...search, //copy the old search properties in a new object
      [e.target.name]: e.target.value, // dynamically replace a key value pair name of the target will bkecoem the jey
    })
  }

  console.log("isLoggedIn", isLoggedIn)
  console.log("userProfile", userProfile)

  return (
    <div className="App">
      <ThemeProvider theme={themeOptions}>
        <UserContext.Provider
          value={{ isLoggedIn, setIsLoggedIn, userProfile, setUserProfile }}
        >
          <SearchContext.Provider
            value={{
              search,
              setSearch,
              handleSearch,
              pageNumber,
              setPageNumber,
              pageCount,
              setPageCount,
            }}
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
                <Route path="/petbio/:id" element={<PetBio />} />
                <Route path="Signup" element={<Signup />} />
                <Route path="favorites" element={<Favorites />} />
              </Routes>
              <Footer />
            </PetsContext.Provider>
          </SearchContext.Provider>
        </UserContext.Provider>
      </ThemeProvider>
    </div>
  )
}

export default App
