import { useContext, useState, useEffect } from "react"
import Carousel from "react-material-ui-carousel"
import CarouselPhotos from "../components/CarouselPhotos"
import { useParams } from "react-router-dom"
import { FurrdoptionContext } from "../FurrdoptionProvider"
import {
  Typography,
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Stack,
  LinearProgress,
} from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import AdoptionForm from "../components/AdoptionForm"
import DefaultPetImage from "../images/defaultImage.png"
import { CardMedia } from "@mui/material"
import { fetchPet } from "../components/petFinderAPI"

function PetBio() {
  //Context provider
  const { petList } = useContext(FurrdoptionContext)

  // get the id from the pet card using React Router URL params
  let params = useParams()

  //Finds the pet object
  // eslint-disable-next-line eqeqeq
  const petObject = petList.find((pet) => pet.id == params.id)

  //Uses petObject as initial state
  const [petBio, setPetBio] = useState(petObject)

  //make a fetch request when user refreshes
  useEffect(() => {
    //if there is a petObject set the petBio state
    if (petObject) {
      setPetBio({ ...petObject })
    }
    //make a fetch request if petObject is undefined
    else {
      try {
        fetchPet(params.id).then((response) => setPetBio(response.animal))
      } catch {}
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {petBio === undefined ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            marginTop: "4rem",
          }}
        >
          <LinearProgress color="secondary" />
          <h3 style={{ marginTop: "1rem", color: "#606060" }}>
            {" "}
            Loading pet information...{" "}
          </h3>
        </Box>
      ) : (
        <Box
          sx={{
            width: {
              xs: "400px",
              sm: "600px",
              md: "800px",
              lg: "850px",
              xl: "1000px",
            },
            margin: "0 auto",
            marginTop: "8rem",
            color: "#959595",
          }}
        >
          <Typography variant="h3" component="div" sx={{ color: "#606060" }}>
            My name is {petBio.name}!
          </Typography>
          <Grid container spacing={4} sx={{ marginTop: "15px" }}>
            <Grid item xs={6}>
              <Carousel>
                {/* check to see if pet has an image with ternary. If not, display default DefaultPetImage */}
                {petBio.photos.length !== 0 ? (
                  petBio.photos.map((pet, i) => (
                    <CarouselPhotos key={i} pet={pet} />
                  ))
                ) : (
                  <CardMedia
                    component="img"
                    height="400"
                    image={DefaultPetImage}
                    alt="pet photo"
                  />
                )}
              </Carousel>
            </Grid>
            <Grid item xs={6} sx={{ marginTop: "5rem" }}>
              <Typography variant="h6" component="p">
                The number of euthanized animals could be reduced dramatically
                if more people adopt pets instead of buying them. When you adopt
                dogs and cats, you save a loving animal by making them part of
                your family and open up a shelter space for another animal who
                might desperately need it. Adopt {petBio.name} and save a life.
              </Typography>
              <Box sx={{ marginTop: "25px" }}>
                <AdoptionForm />
              </Box>
            </Grid>
          </Grid>
          <Divider variant="middle" sx={{ marginTop: "3rem" }} />
          <Box>
            <Typography
              variant="h5"
              sx={{
                marginTop: "2rem",
                marginBottom: "2rem",
                fontWeight: "bold",
                width: {
                  xs: "300px",
                },
                color: "#606060",
              }}
            >
              Facts about me:
            </Typography>
            <Stack direction="row" spacing={15} sx={{ textAlign: "start" }}>
              <Box
                sx={{ fontSize: "1.25rem", fontWeight: "500", width: "10rem" }}
              >
                Breed:
              </Box>
              <Box
                sx={{
                  fontSize: "1.25rem",
                }}
              >
                {petBio.breeds.primary}
              </Box>
            </Stack>
            <Stack direction="row" spacing={15} sx={{ textAlign: "start" }}>
              <Box
                sx={{ fontSize: "1.25rem", fontWeight: "500", width: "10rem" }}
              >
                Gender:
              </Box>
              <Box sx={{ paddingTop: "0.4rem", fontSize: "1.25rem" }}>
                {petBio.gender}
              </Box>
            </Stack>
            <Stack direction="row" spacing={15} sx={{ textAlign: "start" }}>
              <Box
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "500",
                  width: "10rem",
                }}
              >
                Size:
              </Box>
              <Box sx={{ paddingTop: "0.4rem", fontSize: "1.25rem" }}>
                {petBio.size}
              </Box>
            </Stack>
            <Stack direction="row" spacing={15} sx={{ textAlign: "start" }}>
              <Box
                sx={{ fontSize: "1.25rem", fontWeight: "500", width: "10rem" }}
              >
                Color:
              </Box>
              <Box sx={{ paddingTop: "0.4rem", fontSize: "1.25rem" }}>
                {petBio.colors.primary}
              </Box>
            </Stack>
            <Stack direction="row" spacing={15} sx={{ textAlign: "start" }}>
              <Box
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "500",
                  textAlign: "start",
                  width: "10rem",
                }}
              >
                Age:
              </Box>
              <Box sx={{ paddingTop: "0.4rem", fontSize: "1.25rem" }}>
                {petBio.age}
              </Box>
            </Stack>
            <Stack direction="row" spacing={15} sx={{ textAlign: "start" }}>
              <Box
                sx={{ fontSize: "1.25rem", fontWeight: "500", width: "10rem" }}
              >
                Trained:
              </Box>
              <Box sx={{ paddingTop: "0.4rem", fontSize: "1.25rem" }}>
                {petBio.attributes.house_trained ? "Yes" : "No"}
              </Box>
            </Stack>
            <Stack direction="row" spacing={15} sx={{ textAlign: "start" }}>
              <Box
                sx={{ fontSize: "1.25rem", fontWeight: "500", width: "10rem" }}
              >
                Vaccinated:
              </Box>
              <Box sx={{ paddingTop: "0.4rem", fontSize: "1.25rem" }}>
                {petBio.attributes.shot_current ? "Yes" : "No"}
              </Box>
            </Stack>
            <Stack direction="row" spacing={15} sx={{ textAlign: "start" }}>
              <Box
                sx={{ fontSize: "1.25rem", fontWeight: "500", width: "10rem" }}
              >
                Neutered:
              </Box>
              <Box sx={{ paddingTop: "0.4rem", fontSize: "1.25rem" }}>
                {petBio.attributes.spayed_neutered ? "Yes" : "No"}
              </Box>
            </Stack>
            <Stack direction="row" spacing={15} sx={{ textAlign: "start" }}>
              <Box
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "500",
                  width: "10rem",
                }}
              >
                Good with kids:
              </Box>
              <Box sx={{ paddingTop: "0.4rem", fontSize: "1.25rem" }}>
                {petBio.environment.children ? "Yes" : "No"}
              </Box>
            </Stack>
            <Stack direction="row" spacing={15} sx={{ textAlign: "start" }}>
              <Box
                sx={{ fontSize: "1.25rem", fontWeight: "500", width: "10rem" }}
              >
                Good with dogs:
              </Box>
              <Box sx={{ paddingTop: "0.4rem", fontSize: "1.25rem" }}>
                {petBio.environment.dogs ? "Yes" : "No"}
              </Box>
            </Stack>
            <Stack direction="row" spacing={15} sx={{ textAlign: "start" }}>
              <Box
                sx={{ fontSize: "1.25rem", fontWeight: "500", width: "10rem" }}
              >
                Good with cats:
              </Box>
              <Box sx={{ paddingTop: "0.4rem", fontSize: "1.25rem" }}>
                {petBio.environment.cats ? "Yes" : "No"}
              </Box>
            </Stack>
            <Stack direction="row" spacing={15}>
              <Box
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "500",
                  width: "10rem",
                  textAlign: "start",
                }}
              >
                Distance:
              </Box>
              <Box sx={{ paddingTop: "0.4rem", fontSize: "1.25rem" }}>
                {petBio.distance} mi
              </Box>
            </Stack>
            <Stack direction="row" spacing={15}>
              <Box
                sx={{
                  fontSize: "1.25rem",
                  fontWeight: "500",
                  width: "10rem",
                  textAlign: "start",
                }}
              >
                Status:
              </Box>
              <Box sx={{ paddingTop: "0.4rem", fontSize: "1.25rem" }}>
                {petBio.status}
              </Box>
            </Stack>
          </Box>

          <Divider variant="middle" sx={{ marginTop: "3rem" }} />
          <Box sx={{ marginTop: "3rem" }}>
            <Typography
              variant="h5"
              sx={{
                marginTop: "2rem",

                marginBottom: "2rem",
                fontWeight: "bold",
                width: {
                  xs: "300px",
                },
                marginRight: "45rem",
                color: "#606060",
              }}
            >
              My Story
            </Typography>
            <Box>{petBio.description}</Box>
          </Box>
          <Divider variant="middle" sx={{ marginTop: "3rem" }} />
          <Box sx={{ marginTop: "3rem", marginBottom: "3rem" }}>
            <Typography
              variant="h5"
              sx={{
                marginTop: "2rem",
                marginBottom: "2rem",
                fontWeight: "bold",
                width: {
                  xs: "300px",
                },
                marginRight: "35rem",
                color: "#606060",
              }}
            >
              Contact Information:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Address:"
                  secondary={`${petBio.contact.address.address1}
                          ${petBio.contact.address.city} 
                          ${petBio.contact.address.state},
                          ${petBio.contact.address.postcode}
                          `}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Email:"
                  secondary={petBio.contact.email}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Phone number:"
                  secondary={petBio.contact.phone}
                />
              </ListItem>
            </List>
          </Box>
        </Box>
      )}
    </>
  )
}

export default PetBio
