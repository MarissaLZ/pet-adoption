import "./App.css"
import React from "react"
import { Navbar } from "./Navbar"
import ZipCodeInput from "./ZipCodeInput"
import fetchPetList from "./fetchPetList"
import PetList from "./PetList"

function App() {
  //List of pets from Petfinder API used in PetList component, initialized as an empty array
  const [petList, setPetList] = React.useState([])

  //handlePetRequest accepts a zip code from the user within the ZipCodeInput component and passes it into the fetchPetList function
  //then method is used to update the petList state with the returned data
  const handlePetRequest = (zipcode) => {
    fetchPetList(zipcode)
      .then((response) => {
        setPetList(response.animals)
      })
  }


  return (
    <div className="App">
      <Navbar />
      <ZipCodeInput handlePetRequest={handlePetRequest} />
      <PetList petsList={petList} />
    </div>
  )
}

export default App
