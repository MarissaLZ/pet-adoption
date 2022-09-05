import { useContext } from "react"
import { PetsContext } from "../context"
import PetList from "./PetList"

const FeaturedPets = () => {
  const { featuredPets } = useContext(PetsContext)

  return (
    <>
      <h1>Feature Pets</h1>
      <PetList animalList={featuredPets} />
    </>
  )
}

export default FeaturedPets
