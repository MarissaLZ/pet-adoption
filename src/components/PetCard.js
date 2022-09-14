import React from "react"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"
import Grid from "@mui/material/Grid"
import { Link, useNavigate } from "react-router-dom"
import DefaultPetImage from "../images/defaultImage.png"
import SignupPrompt from "./SignupPrompt"

//PetCard component takes in pet prop.
//The card contains the pet's image, name, age, and breed and a heart button/Icon to favorite pet
// The card (bellow card header) is clickable to redirect if we decide to

const PetCard = ({ pet, isFavorited, toggleFavorite }) => {
  const petNavigate = useNavigate()
  const petBioPage = (pet) => {
    petNavigate(`/petbio/${pet.id}`)
  }

  return (
    <>
      <Card elevation={8} sx={{ width: 345, borderRadius: "18px" }}>
        <CardHeader
          title={pet.name}
          action={
            <SignupPrompt
              isFavorited={isFavorited}
              toggleFavorite={toggleFavorite}
              pet={pet}
            />
          }
        />
        <CardActionArea
          component={Link}
          to={`/petbio/${pet.id}`}
          onClick={() => petBioPage(pet)}
        >
          <CardMedia
            component="img"
            height="250"
            image={
              pet.photos.length !== 0 ? pet.photos[0].full : DefaultPetImage
            }
            alt={`Picture of ${pet.name}`}
          />
          <CardContent>
            <Grid container>
              <Grid item xs>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="div"
                >
                  <b>Age:</b> {pet.age}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="div"
                >
                  <b>Breed:</b> {pet.breeds.primary}
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body2" color="text.secondary" component="div">
              {pet.distance ? <b>Distance: {pet.distance} mi</b> : ""}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}

export default PetCard
