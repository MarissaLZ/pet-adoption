import React from "react"
import PetCard from "./PetCard"
import Grid from "@mui/material/Grid"
import fireConfig from "./Firebase/FirebaseConfig"
//Recieves list from parent page or component and maps through it as pet cards
//I don't know what the pet object recieved back looks like, so I put in a placeholder for the key prop
const PetList = ({ petsList }) => {
  const [isFavoritedList, setIsFavoritedList] = React.useState([])
  console.log(petsList)
  console.log(isFavoritedList)

  /*
   determine if it is a favorite in the PetList and pass
   an isFavorite prop to the PetCard.
  */

  const checkIfIsFavorite = (petFinderId) => {
    return !!isFavoritedList.find(
      (favorited) => favorited.petCardId === petFinderId
    )
  }
  //const IncludesFavorite = petsList.includes(isFavorited)
  const toggleFavorite = (petFinderId) => {
    if (checkIfIsFavorite(petFinderId)) {
      handleDelete(petFinderId)
    } else {
      handleAddLike(petFinderId)
    }
  }

  //Adds a favorite
  const handleAddLike = async (petFinderId) => {
    await fireConfig.firestore().collection("likes").add({
      petCardId: petFinderId,
    })
  }

  //Deletes a favorite
  const handleDelete = async (id) => {
    console.log(id)
    const snapshot = await fireConfig
      .firestore()
      .collection("likes")
      .limit(1)
      .where("petCardId", "==", id)
      .get()

    const doc = snapshot.docs[0]
    doc.ref.delete()

    console.log(id)
    // return doc.id
  }

  React.useEffect(() => {
    fireConfig
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
