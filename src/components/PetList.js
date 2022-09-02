import React from "react"
import PetCard from "./PetCard"
import Grid from "@mui/material/Grid"
import firebase from "../Firebase/FirebaseConfig"
import {
  handleAddLike,
  handleDelete,
} from "../Firebase/FirebaseFirestoreServices"
import { useContext } from "react"
import { PetsContext } from "../context"
import AdoptPagination from "./AdoptPagination"

//Recieves list from parent page or component and maps through it as pet cards
const PetList = ({ animalList }) => {
  const { isFavoritedList, setIsFavoritedList } = useContext(PetsContext)

  //List of favorited pets stored in firestore database. Used to check if a pet is already a favorited.

  //Triggers the state color on the PetCard component
  //returns true or false
  const checkIfIsFavorite = (petFinderId) => {
    return !!isFavoritedList.find(
      (firestoreFavorited) => firestoreFavorited.id === petFinderId
    )
  }

  // console.log("checkIfIsFavorite", checkIfIsFavorite())

  const toggleFavorite = (pet) => {
    if (checkIfIsFavorite(pet.id)) {
      handleDelete(pet)
    } else {
      handleAddLike(pet)
    }
  }

  //Retrieves favorite collection from firebase and stores it on isFavorite state
  React.useEffect(() => {
    firebase
      .firestore()
      .collection("likes")
      .onSnapshot((snap) => {
        const likes = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setIsFavoritedList(likes)
      })
  }, [])

  return (
    <>
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        {animalList.map((pet) => (
          <Grid key={pet.id} item xs={4}>
            <PetCard
              pet={pet}
              isFavorited={checkIfIsFavorite(pet.id)}
              toggleFavorite={toggleFavorite}
            />
          </Grid>
        ))}
      </Grid>
      <AdoptPagination />
    </>
  )
}

export default PetList
