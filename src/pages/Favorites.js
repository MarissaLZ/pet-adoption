import { useContext } from "react"
import { FurrdoptionContext } from "../FurrdoptionProvider"
import PetList from "../components/PetList"
import { Box } from "@mui/material"

const Favorites = () => {
  const { isFavoritedList } = useContext(FurrdoptionContext)

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
        <h1 style={{ marginBottom: "1rem" }}>My favorites</h1>
        <PetList animalList={isFavoritedList} />
      </Box>
    </>
  )
}

export default Favorites
