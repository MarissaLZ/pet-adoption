import React from "react"
import { Stack, Grid, Box } from "@mui/material"
import { useNavigate } from "react-router-dom"
import home from "../images/home.jpg"
import { StyledButton } from "../Styles/StyledButton"
const Home = () => {
  // the useNavigate hook navigates to the other routes
  const navigate = useNavigate()

  return (
    <div>
      <Box
        sx={{
          margin: {
            xs: "0 0 0 0",
            sm: "2rem 0 0 0",
            md: "3rem 0 0 0",
            lg: "5rem 0 0 0",
            xl: "5rem 0 0 0",
          },
          display: "flex",
          flexDirection: "column",
          minHeight: {
            xs: "80vh", //0
            sm: "90vh", //600
            md: "70vh", //900
            lg: "80vh", //1200
            xl: "88vh", //1536
          },
          flexGrow: 1,
          backgroundImage: `url(${home})`,
          backgroundSize: {
            xs: "90vw 40vh", //0
            sm: "90vw 60vh", //600
            md: "80vw 70vh", //900
            lg: "85vw 80vh", //1200
            xl: "80vw 88vh", //1536
          },
          backgroundRepeat: "no-repeat",
          height: "auto",
          backgroundPosition: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            width: "35rem",
            height: "20rem",
            margin: {
              xs: "14rem 0 0 0.2rem", //0
              sm: "6rem 0 0 1.5rem", //600
              md: "5rem 0 0 7.25rem", //900
              lg: "4.8rem 0 0 10rem", //1200
              xl: "4rem 0 0 18rem", //1536
            },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Box
                sx={{
                  fontSize: {
                    sx: "3rem",
                    sm: "1.5rem",
                    md: "1.9rem",
                  },
                }}
              >
                <p>Every Pet Deserves A Home</p>
              </Box>
              <Box
                sx={{
                  p: 3,
                  fontSize: {
                    xs: "0.65rem", //0
                    sm: "0.75rem", //600
                    md: ".85rem", //900
                    lg: ".90rem", //1200
                    xl: "1.05rem", //1536
                  },
                }}
              >
                <p>
                  Furdoption aims to rehome the most vulnerable animals, and
                  protect them from cruelty, neglect and illness that often
                  results from ignorance their needs.
                </p>
                <p>Every animal is important to us - help us save lives.</p>
              </Box>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={8}
              >
                <StyledButton
                  variant="contained"
                  pill="true"
                  color="secondary"
                  size="medium"
                  onClick={() => navigate("/adopt")}
                >
                  Adopt Now
                </StyledButton>
                <StyledButton
                  variant="contained"
                  pill="true"
                  color="secondary"
                  size="medium"
                  onClick={() => navigate("/volunteer")}
                >
                  Volunteer
                </StyledButton>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  )
}

export default Home
