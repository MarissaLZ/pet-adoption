import "./App.css"
import React from "react"
import { Navbar } from "./Navbar"
import ZipCodeInput from "./ZipCodeInput"
import fetchPetList from "./fetchPetList"

function App() {
  const [petList, setPetList] = React.useState([])

  console.log("This is the list", petList)
  const handlePetRequest = (zipcode) => {
    fetchPetList(zipcode)
    .then((response) => {
      setPetList(response.animals)
    })
    console.log(petList)
  }


  return (
    <div className="App">
      <Navbar />
      <ZipCodeInput handlePetRequest={handlePetRequest}/>
    </div>
  )
}

export default App
