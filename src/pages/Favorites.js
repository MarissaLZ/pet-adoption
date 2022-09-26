import { useEffect, useContext } from "react"
import { FurrdoptionContext } from "../FurrdoptionProvider"
import PetList from "../components/PetList"
import { Box, LinearProgress } from "@mui/material"
import firebase from "../Firebase/FirebaseConfig"

const Favorites = () => {
  const { isFavoritedList, userProfile, setIsFavoritedList } =
    useContext(FurrdoptionContext)

  const favoriteObject = Object.keys(isFavoritedList).length

  useEffect(() => {
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

        setIsFavoritedList([...likes])
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile])

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: {
            xs: "400px",
            sm: "600px",
            md: "800px",
            lg: "850px",
            xl: "1200px",
          },
          margin: "0 auto",
          marginTop: "8rem",
          marginBottom: "5rem",
          color: "#606060",
        }}
      >
        {favoriteObject === 0 ? (
          <>
            <LinearProgress color="secondary" />
            <h3 style={{ marginTop: "1rem", color: "#606060" }}>
              {" "}
              Loading pet information...{" "}
            </h3>
          </>
        ) : (
          <>
            <h1 style={{ marginBottom: "1rem" }}>My favorites</h1>
            <PetList animalList={isFavoritedList} />
          </>
        )}
      </Box>
    </>
  )
}

export default Favorites
