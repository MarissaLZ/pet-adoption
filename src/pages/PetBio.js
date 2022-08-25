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
      <Box sx={{ marginTop: "4rem" }}>
        <Grid container spacing={4}>
          <Grid item xs={5}>
            <Box sx={{ marginLeft: "6rem", marginTop: "4rem" }}>
              <Carousel>
                {findPetObject.photos.map((pet, i) =>
                  (<CarouselPhotos key={i} pet={pet} />))}
              </Carousel>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Grid container direction="column">
              <Box sx={{ paddingRight: "4rem" }}>
                <Grid item xs={12}>
                  <Typography variant="h3" component="div">
                    {findPetObject.name}
                  </Typography>
                </Grid>
              </Box>
              <Grid container>
                <Grid item xs={6} sx={{ paddingLeft: "8rem" }}>
                  <Box>
                    <List>
                      <ListItem>
                        <ListItemText
                          primary="Breed:"
                          secondary={findPetObject.breeds.primary}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Gender:"
                          secondary={findPetObject.gender}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Age:"
                          secondary={findPetObject.age}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Size:"
                          secondary={findPetObject.size}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Color:"
                          secondary={findPetObject.colors.primary}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Status:"
                          secondary={findPetObject.status}
                        />
                      </ListItem>
                    </List>
                  </Box>
                </Grid>
                <Grid item xs={6} sx={{ paddingLeft: "6rem" }}>
                  <Box>
                    <List>
                      <ListItem>
                        <ListItemText
                          primary="Distance:"
                          secondary={`${findPetObject.distance} mi`}
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="Contact Info:" />
                      </ListItem>
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
                </Grid>
              </Grid>
              <Divider variant="middle" sx={{ marginLeft: "3rem" }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={5}>
            <Box sx={{ marginTop: "2rem" }}>
              <Typography
                variant="h5"
                component="div"
                sx={{ paddingRight: "22rem" }}
              >
                Story:
              </Typography>
              <Typography
                variant="h8"
                component="div"
                sx={{
                  paddingLeft: "5rem",
                  paddingRight: "8rem",
                  paddingTop: "1rem",
                }}
              >
                {findPetObject.description}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={5}>
            <Typography
              variant="h5"
              component="div"
              sx={{
                marginTop: "2rem",
                paddingRight: "16rem",
              }}
            >
              {`About ${findPetObject.name}:`}
            </Typography>
            <Box sx={{ paddingRight: "30rem", paddingTop: "1rem" }}>
              <Typography
                variant="body1"
                color="text.secondary"
                component="div"
              >
                <b>House Trained:</b>{" "}
                {findPetObject.attributes.house_trained ? "Yes" : "No"}{" "}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                component="div"
              >
                <b>Vaccinated:</b> <br />
                {findPetObject.attributes.shot_current ? "Yes" : "No"}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                component="div"
              >
                <b>Spayed/Neutered:</b>{" "}
                {findPetObject.attributes.spayed_neutered ? "Yes" : "No"}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container>
          <Box
            sx={{
              marginLeft: "45%",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <AdoptionForm />
          </Box>
        </Grid>
      </Box>
    </>
  )
}

export default PetBio
