import React from "react"
import { Box, Grid, Divider } from "@mui/material"
import VolunteerInfo from "../components/VolunteerInfo.js"
import VolunteerForm from "../components/VolunteerForm.js"
import VolunteerImagesLayout from "../components/VolunteerImagesLayout.js"
const Volunteer = () => {
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
          lg: "1100px",
          xl: "1300px",
        },
        margin: "0 auto",
        marginTop: "50px",
      }}
    >
      <VolunteerInfo />
      <Grid container>
        <Grid item xs={6}>
          <VolunteerImagesLayout />
        </Grid>
        <Grid item xs={6}>
          <VolunteerForm />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Volunteer
