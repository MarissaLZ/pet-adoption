import React from "react"
import PetCard from "./PetCard"
import Grid from "@mui/material/Grid"
import firebase from "../Firebase/FirebaseConfig"
import {
  handleAddLike,
  handleDelete,
} from "../Firebase/FirebaseFirestoreServices"
import { useContext } from "react"
import { FurrdoptionContext } from "../FurrdoptionProvider"

//Recieves list from parent page or component and maps through it as pet cards
const PetList = ({ animalList }) => {
  const { isFavoritedList, setIsFavoritedList, userProfile, isLoggedIn } =
    useContext(FurrdoptionContext)

  //Triggers the state color on the PetCard component
  //returns true or false
  const checkIfIsFavorite = (petFinderId) => {
    return !!isFavoritedList.find(
      (firestoreFavorited) => firestoreFavorited.id === petFinderId
    )
  }

  const toggleFavorite = (pet) => {
    if (checkIfIsFavorite(pet.id) && isLoggedIn) {
      handleDelete(pet, userProfile.uid)
    } else if (isLoggedIn) {
      handleAddLike(pet, userProfile.uid)
    }
  }

  //Retrieves favorite collection from firebase and stores it on isFavorite state
  React.useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(userProfile.uid)
      .collection("favorites")
      .onSnapshot((snap) => {
        const likes = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setIsFavoritedList(likes)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {animalList.map((pet) => (
          <Grid item m={4} sx={{ xs: "12" }} key={pet.id}>
            <PetCard
              pet={pet}
              isFavorited={checkIfIsFavorite(pet.id)}
              toggleFavorite={toggleFavorite}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default PetList
