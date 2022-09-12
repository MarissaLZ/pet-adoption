import { React } from "react"
import { Grid, Typography } from "@mui/material"
import { StyledBox } from "../Styles/StyledBox"
import pawIcon from "../images/pawIcon.png"

const AboutMissionBox = () => {
  return (
    <>
      <StyledBox
        sx={{
          margin: {
            xs: "5rem 0 0 0",
            sm: "5rem 0 0 0",
            md: "5rem 8rem 0 8rem",
            lg: "5rem 13rem 0 13rem",
            xl: "5rem 15rem 0 15rem",
          },
          color: "white",
        }}
      >
        <Grid container>
          <Grid item xs={2}>
            <img
              style={{ height: "5rem", width: "8rem" }}
              alt="pawIcon"
              src={pawIcon}
            />
          </Grid>
          <Grid item xs={9} sx={{ background: "" }}>
            <Grid container direction="column">
              <Grid item>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  Our Mission
                </Typography>
              </Grid>
              <Grid item sx={{ marginTop: "1rem" }}>
                To rehome the most vulnerable animals and enhance the lives of
                pets and people.
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </StyledBox>
    </>
  )
}

export default AboutMissionBox
