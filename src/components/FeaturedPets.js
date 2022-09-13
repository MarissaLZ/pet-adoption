import { useContext } from "react"
import { FurrdoptionContext } from "../FurrdoptionProvider"
import PetList from "./PetList"
import { Box } from "@mui/material"

const FeaturedPets = () => {
  const { featuredPets } = useContext(FurrdoptionContext)
  console.log("featurePets", featuredPets)
  return (
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
        color: "#606060",
        gap: "3rem",
      }}
    >
      <h1>
        Feature <span style={{ color: "#26A69A" }}>Pets</span>
        <br />
        <h6>Adorable adoptables near you!</h6>
      </h1>

      <PetList animalList={featuredPets} />
    </Box>
  )
}

export default FeaturedPets
