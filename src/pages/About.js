import React from "react"
import { Box } from "@mui/material"
import AboutMissionBox from "../components/AboutMissionBox"
import AboutAssistanceBox from "../components/AboutAssistanceBox"
import AboutImageTextLayout from "../components/AboutImageTexLayout"

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <AboutMissionBox />
      <AboutImageTextLayout />
      <AboutAssistanceBox />
    </Box>
  )
}

export default About
