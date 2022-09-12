import React from "react"
import { Divider, Box, Grid, IconButton } from "@mui/material"
import styled from "styled-components"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import rundogimg from "../images/rundog.jpg"
import cat from "../images/cat.jpg"
import standdog from "../images/standdog.jpg"
import { StyledButton } from "../Styles/StyledButton"
import volunteerPeople from "../images/volunteerPeople.png"
import volunteerFoster from "../images/volunteerFoster.png"
import volunteerSchool from "../images/volunteerSchool.png"
import sadDog from "../images/sadDog.jpg"

function VolunteerInfo() {
  return (
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
        color: "#959595",
      }}
    >
      <h1 style={{ color: "#606060" }}>Volunteer</h1>
      <Divider sx={{ marginTop: "1rem" }} />
      <Grid container spacing={3} sx={{ marginTop: "30px" }}>
        <Grid item xs={4}>
          <img
            src={volunteerPeople}
            alt="volunteer today!"
            width="150px"
            height="150px"
          />
          <h3
            style={{
              marginTop: "1rem",
              color: "#606060",
            }}
          >
            Volunteer{" "}
          </h3>
          <p>
            Choose the way you prefer to help animals, shelters, and rescues in
            need.
          </p>
        </Grid>
        <Grid item xs={4}>
          <img
            src={volunteerFoster}
            alt="foster a pet!"
            width="150px"
            height="150px"
          />
          <h3 style={{ marginTop: "1rem", color: "#606060" }}>Foster A Pet</h3>
          <p>
            Fostering is a fantastic way to make a difference in the life of an
            animal!
          </p>
        </Grid>
        <Grid item xs={4}>
          <img
            src={volunteerSchool}
            alt="earn school credit"
            width="150px"
            height="150px"
          />
          <h3 style={{ marginTop: "1rem", color: "#606060" }}>
            Volunteer For Credit
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: "50px" }}></Box>
      <Divider />
    </Box>
  )
}

export default VolunteerInfo
