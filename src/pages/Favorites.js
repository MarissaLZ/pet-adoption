import { useContext } from "react"
import { FurrdoptionContext } from "../FurrdoptionProvider"
import PetList from "../components/PetList"

const Favorites = () => {
  const { isFavoritedList } = useContext(FurrdoptionContext)

  return (
    <>
      <h1>My favorites</h1>
      <PetList animalList={isFavoritedList} />
    </>
  )
}

export default Favorites
