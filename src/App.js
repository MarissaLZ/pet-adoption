import "./App.css"
import React from "react"
import { Navbar } from "./Components/Navbar"
import ZipCodeInput from "./Components/ZipCodeInput"
import fetchPetList from "./Components/fetchPetList"
import PetList from "./Components/PetList"
import Footer from "./Components/Footer"

function App() {
  //List of pets from Petfinder API used in PetList component, initialized as an empty array
  const [petList, setPetList] = React.useState([])

  //handlePetRequest accepts a zip code from the user within the ZipCodeInput component and passes it into the fetchPetList function
  //then method is used to update the petList state with the returned data
  const handlePetRequest = (zipcode) => {
    fetchPetList(zipcode).then((response) => {
      setPetList(response.animals)
    })
  }

  return (
    <div className="App">
      <Navbar />
      <ZipCodeInput handlePetRequest={handlePetRequest}/>
      <PetList petsList={petList}/>
      <Footer/>
    </div>
  )
}

export default App
