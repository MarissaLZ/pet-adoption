import React from "react"
import { Button, Box, Grid, IconButton } from "@mui/material"
import styled from "styled-components"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import rundogimg from "../images/rundog.jpg"
import cat from "../images/cat.jpg"
import standdog from "../images/standdog.jpg"

const Donate = () => {
  const handleClick = (e) => {
    console.log("Clicked on donate button")
  }

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
        marginTop: "60px",
        marginBottom: "50px",
      }}
    >
      <h1>How Furrdoption Works</h1>
      <Grid container spacing={3} sx={{ marginTop: "50px" }}>
        <Grid item xs={4}>
          <ImageCircleStyle
            src={rundogimg}
            alt="running dog"
            width="150px"
            height="150px"
          />
          <h3>Donate Throgh Furrdoption</h3>
          <p>
            Choose the way you prefer to help animals, shelters, and rescues in
            need.
          </p>
        </Grid>
        <Grid item xs={4}>
          <ImageCircleStyle
            src={cat}
            alt="kitty"
            width="150px"
            height="150px"
          />
          <h3>Shelters Receive Donation</h3>
          <p>
            All items will be sent directly to the shelter or rescue you
            supported.
          </p>
        </Grid>
        <Grid item xs={4}>
          <ImageCircleStyle
            src={standdog}
            alt="standing dog"
            width="150px"
            height="150px"
          />
          <h3>Email Updates Sent</h3>
          <p>
            Monthly email updates for you to see the impact of your donation.
            You won’t miss any news of the shelters or rescues you helped.
          </p>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={handleClick}
        sx={{ marginBottom: "50px", marginTop: "50px" }}
      >
        Donate
      </Button>
      <h1>Donate a post or a tweet</h1>
      <Box sx={{ marginTop: "50px", marginBottom: "50px" }}>
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

const ImageCircleStyle = styled.img`
  border-radius: 50%;
  border: 15px solid #1976d2;
`

export default Donate
