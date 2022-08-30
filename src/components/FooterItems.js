import React from "react"
import { Link, Box, Grid } from "@mui/material"
import styled from "styled-components"

export default function FooterItems() {
  //lists of all the links, there isnt' an about us page yet so that link is # for now
  const siteLinks = [
    { linkName: "Adopt", linkURL: "adopt" },
    { linkName: "Volunteer", linkURL: "volunteer" },
    { linkName: "Donate", linkURL: "donate" },
    { linkName: "About", linkURL: "about" },
  ]
  const projectLinks = [
    { linkName: "Code The Dream", linkURL: "https://codethedream.org/" },
    { linkName: "About Us", linkURL: "#" },
  ]
  const resourceLinks = [
    { linkName: "Material UI", linkURL: "https://mui.com/" },
    { linkName: "Firebase", linkURL: "https://firebase.google.com/" },
    { linkName: "Figma", linkURL: "https://figma.com" },
  ]

  return (
    <>
      <Grid item xs={4} sm={4}>
        <ColumnContainer>
          <Box borderBottom={1}>Site Links</Box>
          {siteLinks.map((item) => (
            <Box key={item.linkName}>
              <Link
                href={item.linkURL}
                underline="hover"
                color="inherit"
                rel="noopener noreferrer"
              >
                {item.linkName}
              </Link>
            </Box>
          ))}
        </ColumnContainer>
      </Grid>
      <Grid item xs={4} sm={4}>
        <ColumnContainer>
          <Box borderBottom={1}>About This Project</Box>
          {projectLinks.map((item) => (
            <Box key={item.linkName}>
              <Link
                href={item.linkURL}
                underline="hover"
                color="inherit"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.linkName}
              </Link>
            </Box>
          ))}
        </ColumnContainer>
      </Grid>
      <Grid item xs={4} sm={4}>
        <ColumnContainer>
          <Box borderBottom={1}>Resources Used</Box>
          {resourceLinks.map((item) => (
            <Box key={item.linkName}>
              <Link
                href={item.linkURL}
                underline="hover"
                color="inherit"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.linkName}
              </Link>
            </Box>
          ))}
        </ColumnContainer>
      </Grid>
    </>
  )
}

//Styling for the columns
const ColumnContainer = styled.div`
  margin: 5px;
  padding: 5px;
`
