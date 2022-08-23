import React from "react"
import { Button, Stack, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // the useNavigate hook navigates to the other routes
  const navigate = useNavigate();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <h1>Every Pet Deserves A Home</h1>
            <Box m={2} sx={{ p: 2 }}>
              <p>Join our mission to rehome the most vulnerable animals and enhance the lives of pets and people</p>
              <p>Every animal is important to us - help us save lives.</p>
            </Box>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={8}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => navigate("/adopt")}
              >
                Adopt Now
              </Button>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => navigate("/volunteer")}
              >
                Volunteer
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Home
