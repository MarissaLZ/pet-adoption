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
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
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
            // ml: "20rem",
            // mt: "4rem",
            // marginLeft
            // marginTop: {
            margin: {
              //  t  r  b  l
              xs: "11rem 0 0 0.2rem", //0
              sm: "6rem 0 0 1.5rem", //600
              md: "4.5rem 0 0 7.25rem", //900
              lg: "4.8rem 0 0 10rem", //1200
              xl: "4rem 0 0 18rem", //1536
            },

            // backgroundColor: "orange",
          }}
        >
          <Grid
            container
            spacing={2}
            // sx={{ marginTop: "8rem", marginRight: "25rem" }}
          >
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
                // m={1}
                sx={{
                  // marginLeft: "10rem",
                  p: 3,
                  fontSize: {
                    //  t  r  b  l
                    xs: "0.65rem", //0
                    sm: "0.75rem", //600
                    md: ".85rem", //900
                    lg: ".90rem", //1200
                    xl: "1.05rem", //1536
                  },
                }}
              >
                <p>
                  Join our mission to rehome the most vulnerable animals and
                  enhance the lives of pets and people.
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
                  variant="contained" pill
                  color="secondary"
                  // size="medium"
                  //sx={{ xs: "small", sm: "small", md: "medium" }}
                  size="medium"
                  onClick={() => navigate("/adopt")}
                >
                  Adopt Now
                </StyledButton>
                <StyledButton
                  variant="contained" pill
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
