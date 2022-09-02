import { useContext } from "react"
import { PetsContext } from "../context"
import PetList from "../components/PetList"

const Favorites = () => {
  const { isFavoritedList } = useContext(PetsContext)

  return (
    <>
      <h1>My favorites</h1>
      <PetList animalList={isFavoritedList} />
    </>
  )
}

export default Favorites
