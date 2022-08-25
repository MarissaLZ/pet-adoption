import { useContext } from "react"
import Carousel from "react-material-ui-carousel"
import CarouselPhotos from "../components/CarouselPhotos"
import { useParams } from "react-router-dom"
import { PetsContext } from "../context"
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
} from "@mui/material"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import AdoptionForm from "../components/AdoptionForm"

function PetBio() {
  //Context provider
  const { petList } = useContext(PetsContext)

  // get the id from the pet card using React Router URL params
  let params = useParams()

  const findPetObject = petList.find((pet) => pet.id == params.id)

  console.log("petData", findPetObject)

  return (
    <>
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
          marginTop: "50px",
        }}
      >
        <Typography variant="h3" component="div">
          My namae is {findPetObject.name}!
        </Typography>
        <Grid container spacing={4} sx={{ marginTop: "15px" }}>
          <Grid item xs={6}>
            {/* <Box sx={{ marginLeft: "6rem", marginTop: "4rem" }}> */}
            <Carousel>
              {findPetObject.photos.map((pet, i) => (
                <CarouselPhotos key={i} pet={pet} />
              ))}
            </Carousel>
            {/* </Box> */}
          </Grid>
          <Grid item xs={6} sx={{ marginTop: "10px" }}>
            <Typography variant="h6" component="p">
              The number of euthanized animals could be reduced dramatically if
              more people adopt pets instead of buying them. When you adopt dogs
              and cats, you save a loving animal by making them part of your
              family and open up a shelter space for another animal who might
              desperately need it. Adopt {findPetObject.name} and save a life.
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
            }}
          >
            Facts about me:
          </Typography>
          <Stack direction="row" spacing={15}>
            <Box sx={{ fontSize: "1.25rem", fontWeight: "500", width: "4rem" }}>
              Breed:
            </Box>
            <Box
              sx={{
                fontSize: "1.25rem",
              }}
            >
              {findPetObject.breeds.primary}
            </Box>
          </Stack>
          <Stack direction="row" spacing={15}>
            <Box sx={{ fontSize: "1.25rem", fontWeight: "500", width: "4rem" }}>
              Gender:
            </Box>
            <Box sx={{ paddingTop: "0.4rem", fontSize: "1.25rem" }}>
              {findPetObject.gender}
            </Box>
          </Stack>
          <Stack direction="row" spacing={15} sx={{ textAlign: "start" }}>
            <Box
              sx={{
                fontSize: "1.25rem",
                fontWeight: "500",
                width: "4rem",
              }}
            >
              Size:
            </Box>
            <Box sx={{ paddingTop: "0.4rem", fontSize: "1.25rem" }}>
              {findPetObject.size}
            </Box>
          </Stack>
          <Stack direction="row" spacing={15} sx={{ textAlign: "start" }}>
            <Box sx={{ fontSize: "1.25rem", fontWeight: "500", width: "4rem" }}>
              Color:
            </Box>
            <Box sx={{ paddingTop: "0.4rem", fontSize: "1.25rem" }}>
              {findPetObject.colors.primary}
            </Box>
          </Stack>
          <Stack direction="row" spacing={15} sx={{ textAlign: "start" }}>
            <Box
              sx={{
                fontSize: "1.25rem",
                fontWeight: "500",
                textAlign: "start",
                width: "4rem",
              }}
            >
              Age:
            </Box>
            <Box sx={{ paddingTop: "0.4rem", fontSize: "1.25rem" }}>
              {findPetObject.age}
            </Box>
          </Stack>
          <Stack direction="row" spacing={15}>
            <Box sx={{ fontSize: "1.25rem", fontWeight: "500", width: "4rem" }}>
              Trained:
            </Box>
            <Box sx={{ paddingTop: "0.4rem", fontSize: "1.25rem" }}>
              {findPetObject.attributes.house_trained ? "Yes" : "No"}
            </Box>
          </Stack>
          <Stack direction="row" spacing={15}>
            <Box sx={{ fontSize: "1.25rem", fontWeight: "500", width: "4rem" }}>
              Vaccinated:
            </Box>
            <Box sx={{ paddingTop: "0.4rem", fontSize: "1.25rem" }}>
              {findPetObject.attributes.shot_current ? "Yes" : "No"}
            </Box>
          </Stack>
          <Stack direction="row" spacing={15}>
            <Box sx={{ fontSize: "1.25rem", fontWeight: "500", width: "4rem" }}>
              Neutered:
            </Box>
            <Box sx={{ paddingTop: "0.4rem", fontSize: "1.25rem" }}>
              {findPetObject.attributes.spayed_neutered ? "Yes" : "No"}
            </Box>
          </Stack>
          <Stack
            sx={{
              fontSize: "1.25rem",
              fontWeight: "500",
              textAlign: "start",
              width: "10rem",
            }}
          >
            I'm good with:
          </Stack>
          <Stack direction="row" spacing={15} sx={{ textAlign: "start" }}>
            <Box
              sx={{
                fontSize: "1.25rem",
                fontWeight: "500",
                width: "4rem",
              }}
            >
              kids:
            </Box>
            <Box sx={{ paddingTop: "0.4rem", fontSize: "1.25rem" }}>
              {findPetObject.environment.children ? "Yes" : "No"}
            </Box>
          </Stack>
          <Stack direction="row" spacing={15} sx={{ textAlign: "start" }}>
            <Box sx={{ fontSize: "1.25rem", fontWeight: "500", width: "4rem" }}>
              Dogs:
            </Box>
            <Box sx={{ paddingTop: "0.4rem", fontSize: "1.25rem" }}>
              {findPetObject.environment.dogs ? "Yes" : "No"}
            </Box>
          </Stack>
          <Stack direction="row" spacing={15} sx={{ textAlign: "start" }}>
            <Box sx={{ fontSize: "1.25rem", fontWeight: "500", width: "4rem" }}>
              Cats:
            </Box>
            <Box sx={{ paddingTop: "0.4rem", fontSize: "1.25rem" }}>
              {findPetObject.environment.cats ? "Yes" : "No"}
            </Box>
          </Stack>
          <Stack direction="row" spacing={15}>
            <Box sx={{ fontSize: "1.25rem", fontWeight: "500", width: "4rem" }}>
              Distance:
            </Box>
            <Box sx={{ paddingTop: "0.4rem", fontSize: "1.25rem" }}>
              {findPetObject.distance} mi
            </Box>
          </Stack>
          <Stack direction="row" spacing={15}>
            <Box sx={{ fontSize: "1.25rem", fontWeight: "500", width: "4rem" }}>
              Status:
            </Box>
            <Box sx={{ paddingTop: "0.4rem", fontSize: "1.25rem" }}>
              {findPetObject.status}
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
            }}
          >
            My Story
          </Typography>
          <Box>{findPetObject.description}</Box>
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
                secondary={`${findPetObject.contact.address.address1}
                          ${findPetObject.contact.address.city} 
                          ${findPetObject.contact.address.state},
                          ${findPetObject.contact.address.postcode}
                          `}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText
                primary="Email:"
                secondary={findPetObject.contact.email}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText
                primary="Phone number:"
                secondary={findPetObject.contact.phone}
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  )
}

export default PetBio
