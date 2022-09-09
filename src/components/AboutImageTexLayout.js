import { React } from "react"
import { Grid, Box, Typography, Divider } from "@mui/material"
import { CardMedia } from "@mui/material"

const ImageTextLayout = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "400px",
          sm: "600px",
          md: "800px",
          lg: "1100px",
          xl: "1400px",
        },
        margin: "0 auto",
        marginTop: "50px",
        marginBottom: "10rem",
      }}
    >
      <Grid container spacing={4} sx={{ marginTop: "15px" }}>
        <Grid item xs={6}>
          <CardMedia
            component="img"
            height="400"
            sx={{ borderRadius: "0.5rem" }}
            image={
              "https://lirp.cdn-website.com/f7166509/dms3rep/multi/opt/Happy+dog-640w.jpg"
            }
            alt="pet photo"
          />
        </Grid>
        <Grid item xs={6} sx={{ marginTop: "2rem" }}>
          <Typography variant="h4">About us</Typography>
          <Divider />
          <Typography
            component="p"
            sx={{
              marginTop: "1.5rem",
              typography: { sm: "body1", xs: "body2", xl: "h6" },
            }}
          >
            Furrduption helps give animals an opportunity to find a temporary or
            permanent loving home. We enable animal shelters to receive
            donations for the care of the most vulnerable. Through Furrdoption,
            animal lovers can donate, help, and save animals, and in most cases
            they "save us".
            <br />
            It is our obligation to support those who do not have a voice and
            give them the chance to have a better life.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ImageTextLayout
