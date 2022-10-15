import React, { useState, useContext, useEffect } from "react"
import {
  CardActions,
  CardContent,
  TextField,
  Typography,
  Card,
  Box,
  Grid,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Divider,
  LinearProgress,
  FormControl,
  FormLabel,
} from "@mui/material"
import { FurrdoptionContext } from "../FurrdoptionProvider"
import firebase from "../Firebase/FirebaseConfig"
import { StyledButton } from "../Styles/StyledButton"

function Profile() {
  const [isEditable, setIsEditable] = useState(false)

  //Gets user info from inpu field
  const [profileData, setProfileData] = useState({
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    volunteer: false,
    adopter: false,
    foster: false,
  })

  const { userProfile } = useContext(FurrdoptionContext)
  console.log("userProfile", userProfile)

  const userName = userProfile.displayName

  const handleEdit = () => {
    setIsEditable(!isEditable)
  }

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value })
  }

  const handleCheck = (e) => {
    console.log(
      "[e.target.name]: e.target.value",
      e.target.checked,
      typeof e.target.checked
    )
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.checked,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    //get current logged in user
    const user = firebase.auth().currentUser
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .set(
          {
            ...profileData,
          },
          { merge: true }
        )
        .then(() => {
          // console.log("Document successfully written!")
        })
    } else {
      // No user is signed in.
      setIsEditable(!isEditable)
    }
    setIsEditable(!isEditable)
  }

  //Gets user data from firestore
  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(userProfile.uid)
      .get()
      .then((doc) => {
        setProfileData({ ...doc.data() })
      })
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile])

  return (
    <>
      {profileData.email === "" ? (
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
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            color: "#606060",
            width: {
              xs: "400px",
              sm: "600px",
              md: "1000px",
              lg: "1100px",
              xl: "1300px",
            },
            margin: "0 auto",
            marginTop: "50px",
            marginBottom: "5rem",
          }}
        >
          <Card variant="outlined">
            <Box sx={{ marginTop: "2rem" }}>
              <h1 style={{ color: "#606060" }}>My Furrdoption</h1>
              <Divider sx={{ width: "50%", margin: "1.5rem 0 1.5rem 25%" }} />
              <h2 style={{ color: "#606060" }}>About me:</h2>
            </Box>

            <CardContent>
              <Grid container spacing={8} sx={{ margin: "3px 0 0 1rem" }}>
                <Grid item xs={1} sx={{ width: "1rem", fontWeight: "bold" }}>
                  <h3 style={{ color: "#606060" }}>{userName}</h3>
                </Grid>
                <Grid item xs={10}>
                  <FormControl component="fieldset" variant="standard">
                    <FormLabel component="legend">
                      Select roles
                      <FormGroup
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          gap: "5rem",
                        }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={profileData.volunteer}
                              onChange={handleCheck}
                              name="volunteer"
                            />
                          }
                          label="Volunteer"
                          name="volunteer"
                          disabled={!isEditable}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={profileData.adopter}
                              onChange={handleCheck}
                              name="adopter"
                            />
                          }
                          label="Adopter"
                          name="adopter"
                          disabled={!isEditable}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={profileData.foster}
                              onChange={handleCheck}
                              name="foster"
                            />
                          }
                          label="Foster"
                          name="foster"
                          disabled={!isEditable}
                        />
                      </FormGroup>
                    </FormLabel>
                  </FormControl>
                </Grid>
              </Grid>
              <Stack spacing={8} sx={{ margin: "3rem 0 0 5rem" }}>
                <Stack direction="row" spacing={6}>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    sx={{ paddingTop: "1rem" }}
                  >
                    Phone Number:
                  </Typography>
                  <TextField
                    id="standard-basic"
                    //label="Phone Number"
                    disabled={!isEditable}
                    name="phone"
                    value={profileData.phone}
                    onChange={handleChange}
                  />
                </Stack>
                <Stack direction="row" spacing={13}>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    sx={{ paddingTop: "2.5rem" }}
                    style={{ color: "#606060" }}
                  >
                    Address:
                  </Typography>
                  <Box>
                    <Stack direction="row" spacing={5}>
                      <Box>
                        <Box
                          sx={{
                            paddingBottom: "0.25rem",
                            textAlign: "start",
                            color: "#606060",
                          }}
                        >
                          Street
                        </Box>
                        <TextField
                          id="standard-basic"
                          //label="Street Address:"
                          disabled={!isEditable}
                          name="street"
                          value={profileData.street}
                          onChange={handleChange}
                        />
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            paddingBottom: "0.25rem",
                            textAlign: "start",
                            color: "#606060",
                          }}
                        >
                          City
                        </Box>
                        <TextField
                          id="standard-basic"
                          //label="City:"
                          disabled={!isEditable}
                          name="city"
                          value={profileData.city}
                          onChange={handleChange}
                        />
                      </Box>
                      <Box>
                        <Box
                          sx={{
                            paddingBottom: "0.25rem",
                            textAlign: "start",
                            color: "#606060",
                          }}
                        >
                          State
                        </Box>
                        <TextField
                          id="standard-basic"
                          //label="State:"
                          disabled={!isEditable}
                          name="state"
                          value={profileData.state}
                          onChange={handleChange}
                        />
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Stack>
            </CardContent>
            <CardActions sx={{ margin: "5rem 0 3rem 0", marginLeft: "50%" }}>
              {isEditable ? (
                <StyledButton
                  variant="contained"
                  pill="true"
                  size="large"
                  color="secondary"
                  onClick={handleSubmit}
                >
                  Save Profile
                </StyledButton>
              ) : (
                <StyledButton
                  variant="contained"
                  pill="true"
                  size="large"
                  color="secondary"
                  onClick={handleEdit}
                >
                  Edit Profile
                </StyledButton>
              )}
            </CardActions>
          </Card>
        </Box>
      )}
    </>
  )
}

export default Profile
