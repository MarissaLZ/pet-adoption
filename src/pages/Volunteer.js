import React from "react"
import { Box, Grid } from "@mui/material"
import VolunteerInfo from "../components/VolunteerInfo.js"
import VolunteerForm from "../components/VolunteerForm.js"
import VolunteerImagesLayout from "../components/VolunteerImagesLayout.js"
const Volunteer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: {
          xs: "400px",
          sm: "600px",
          md: "1000px",
          lg: "1100px",
          xl: "1300px",
        },
        margin: "0 auto",
        marginTop: "7rem",
        marginBottom: "5rem",
      }}
    >
      <VolunteerInfo />
      <Grid container sx={{ justifyContent: "center", gap: "3rem" }}>
        <Grid
          item
          s={6}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <VolunteerImagesLayout />
        </Grid>
        <Grid item s={6} sx={{ xs: "12" }}>
          <VolunteerForm />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Volunteer
