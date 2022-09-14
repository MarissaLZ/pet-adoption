import sadDog from "../images/sadDog.jpg"
import hug2dogs from "../images/slack-imgs-1.jpg"
import littleboywithgolden from "../images/littleboywithgolden.jpg"
import { Box, Grid } from "@mui/material"
import styled from "styled-components"

import React from "react"

const VolunteerImagesLayout = () => {
  return (
    <Box style={{ marginTop: "5rem" }}>
      <Grid container>
        <Grid item xs={6}>
          <Box>
            <ImageRectangleStyle
              src={hug2dogs}
              alt="volunteer today!"
              width="250px"
              height="200px"
            />
          </Box>
          <Box style={{ paddingTop: "5rem" }}>
            <ImageRectangleStyle
              src={littleboywithgolden}
              alt="volunteer today!"
              width="250px"
              height="200px"
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box style={{ marginTop: "8rem" }}>
            <ImageRectangleStyle
              src={sadDog}
              alt="volunteer today!"
              width="250px"
              height="200px"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

const ImageRectangleStyle = styled.img`
  border-radius: 25%;
  border: 15px solid #26a69a;
`

export default VolunteerImagesLayout
