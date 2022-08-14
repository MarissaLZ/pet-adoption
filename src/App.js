import "./App.css"
import { Routes, Route } from "react-router-dom"
import React from "react"
import { Navbar } from "./Navbar"
import ZipCodeInput from "./ZipCodeInput"
import fetchPetList from "./fetchPetList"
import PetList from "./PetList"
import Login from "./Login"

function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [user, setUser] = React.useState([])

  const handleLogin = (user) => {
    setIsLoggedIn(true)
    setUser(user)
  }

  //List of pets from Petfinder API used in PetList component, initialized as an empty array
  const [petList, setPetList] = React.useState([])

  //handlePetRequest accepts a zip code from the user within the ZipCodeInput component and passes it into the fetchPetList function
  //then method is used to update the petList state with the returned data
  const handlePetRequest = (zipcode) => {
    fetchPetList(zipcode).then((response) => {
      setPetList(response.animals)
    })
  }

  console.log(user)
  console.log(isLoggedIn)

  return (
    <div className="App">
      <Navbar />
      <Login handleLogin={handleLogin}/>
      <ZipCodeInput handlePetRequest={() => handlePetRequest} />
      <PetList petsList={petList} />
    </div>
  )
}

export default App
