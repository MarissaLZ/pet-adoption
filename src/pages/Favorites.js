import { useContext, useEffect } from "react"
import { PetsContext, SearchContext } from "../context"
import PetList from "../components/PetList"
import fetchPetList from "../components/fetchPetList"

/*
Todo:
[x] Create route that takes te user to the favorite 
    when click on favorite button.
[] 
[x] Make the pet list reusable
[x]  Display favorite list 
    - Use PetList component to display favorited animals.
    - Make PetList component reusable. 
       
[] Add favorite when user is logged in 
[] Delete favorite when user is logged in 
 
*/

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
