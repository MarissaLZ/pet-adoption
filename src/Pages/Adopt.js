import React from "react"
import ZipCodeInput from "../Components/ZipCodeInput"
import PetList from "../Components/PetList"
import fetchPetList from "../Components/fetchPetList"

const Adopt = () => {
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
    <div>
      <PetList petsList={petList} />
      <ZipCodeInput handlePetRequest={handlePetRequest} />
    </div>
  )
}

export default Adopt
