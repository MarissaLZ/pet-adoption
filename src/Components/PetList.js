import React from "react"
import PetCard from "./PetCard"
import Grid from "@mui/material/Grid"
import firebase from "../Firebase/FirebaseConfig"
import {
  handleAddLike,
  handleDelete,
} from "../Firebase/FirebaseFirestoreServices"
//Recieves list from parent page or component and maps through it as pet cards
//I don't know what the pet object recieved back looks like, so I put in a placeholder for the key prop
const PetList = ({ petsList }) => {
  //List of favorited pets stored in firestore database. Used to check if a pet is already a favorited.
  const [isFavoritedList, setIsFavoritedList] = React.useState([])

  //Triggers the state color on the PetCard component
  const checkIfIsFavorite = (petFinderId) => {
    return !!isFavoritedList.find(
      (favorited) => favorited.petFirebaseId === petFinderId
    )
  }

  const toggleFavorite = (petFinderId) => {
    if (checkIfIsFavorite(petFinderId)) {
      handleDelete(petFinderId)
    } else {
      handleAddLike(petFinderId)
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
    <Grid
      container
      spacing={3}
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      {petsList.map((pet) => (
        <Grid key={pet.id} item xs={4}>
          <PetCard
            pet={pet}
            isFavorited={checkIfIsFavorite(pet.id)}
            toggleFavorite={toggleFavorite}
          />
        </Grid>
      ))}
    </Grid>
  )
}

export default PetList
