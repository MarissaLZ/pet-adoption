import { useContext } from "react"
import { FurrdoptionContext } from "../FurrdoptionProvider"
import PetList from "./PetList"
import { Box } from "@mui/material"

const FeaturedPets = () => {
  const { featuredPets } = useContext(FurrdoptionContext)

  return (
    <>
      <Box
        sx={{
          width: {
            xs: "400px",
            sm: "600px",
            md: "800px",
            lg: "900px",
            xl: "1200px",
          },
          margin: "0 auto",
          color: "#606060",
          gap: "1rem",
        }}
      >
        <h1 style={{ fontSize: "4rem" }}>
          Featured <span style={{ color: "#26A69A" }}>Pets</span>
        </h1>
        <br />
        <h4 style={{ fontSize: "1.5rem" }}>Adorable adoptables near you!</h4>
      </Box>
      <PetList animalList={featuredPets} />
    </>
  )
}

export default FeaturedPets
