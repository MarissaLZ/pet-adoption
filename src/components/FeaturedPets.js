import { useContext } from "react"
import { FurrdoptionContext } from "../FurrdoptionProvider"
import PetList from "./PetList"

const FeaturedPets = () => {
  const { featuredPets } = useContext(FurrdoptionContext)

  return (
    <>
      <h1>Feature Pets</h1>
      <PetList animalList={featuredPets} />
    </>
  )
}

export default FeaturedPets
