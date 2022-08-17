import React from "react"
import { Button, Stack, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // the useNavigate hook navigates to the other routers
  const navigate = useNavigate();

  return (
    <div>
      <Container>
        <h1>Every Pet Deserves A Home</h1>
        <Stack
          direction="row"
          justifyContent="flex-start"
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
      </Container>
    </div>
  )
}

export default Home
