import React from "react"
import Carousel from "react-material-ui-carousel"
import { Typography, Grid, Box } from "@mui/material"
import AdoptionForm from "../components/AdoptionForm"
import CarouselPhotos from "../components/CarouselPhotos"

function PetBio() {
  var petPhotos = [
    {
      photo: `https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56700679/1/?bust=1660756292`,
    },
    {
      photo: `https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56700679/2/?bust=1660756292`,
    },
    {
      photo: `https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56700679/3/?bust=1660756293`,
    },
    {
      photo: `https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/56700679/4/?bust=1660756293`,
    },
  ]

  return (
    <>
      <Box sx={{ marginTop: "4rem" }}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Box sx={{ marginLeft: "4rem" }}>
              <Carousel>
                {petPhotos.map((photo, i) => (
                  <CarouselPhotos key={i} photo={photo} />
                ))}
              </Carousel>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Grid container direction="column">
              <Grid item xs={12}>
                <Typography variant="h3" component="div">
                  Name
                </Typography>
              </Grid>
              <Grid container>
                <Grid item xs={6}>
                  <Box>
                    <ul style={{ listStyleType: "none" }}>
                      <li>Breed</li>
                      <li>Gender</li>
                      <li>Age</li>
                      <li>Size</li>
                      <li>Color</li>
                    </ul>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    <ul style={{ listStyleType: "none" }}>
                      <li>Distance</li>
                      <li>Contact</li>
                      <li>Address</li>
                      <li>Email</li>
                      <li>Phone number</li>
                    </ul>
                  </Box>
                </Grid>
              </Grid>
              <Grid container direction="column">
                <Grid item xs={3}>
                  <Box sx={{ marginRight: "20rem", marginTop: "2rem" }}>
                    <Typography variant="h5" component="span">
                      About:
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box sx={{ marginRight: "20rem", marginTop: "2rem" }}>
                    <Typography variant="h5" component="div">
                      Story:
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container>
            <Box
              sx={{
                marginLeft: "50%",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              <AdoptionForm />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default PetBio
