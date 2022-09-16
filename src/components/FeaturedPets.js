import { useContext } from "react"
import { FurrdoptionContext } from "../FurrdoptionProvider"
import PetList from "./PetList"
import { Box } from "@mui/material"

const FeaturedPets = () => {
  const { featuredPets } = useContext(FurrdoptionContext)
  console.log("featurePets", featuredPets)
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
          marginTop: "5rem",
        }}
      >
        <h1 style={{ fontSize: "4rem" }}>
          Featured{" "}
          <span
            style={{ borderBottom: "6px solid #26a69a", paddingBottom: "5px" }}
          >
            Pets
          </span>
        </h1>
        <br />
        <h4
          style={{
            fontSize: "1.5rem",
            marginBottom: "1.5rem",
            marginTop: "1rem",
          }}
        >
          Adorable adoptables near you!
        </h4>
      </Box>
      <PetList animalList={featuredPets} />
    </>
  )
}

export default FeaturedPets
