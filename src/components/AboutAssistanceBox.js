import { React } from "react"
import { Grid, Box, Link } from "@mui/material"
import PetsIcon from "@mui/icons-material/Pets"
import { Typography } from "@mui/material"

const AboutAssistanceBox = () => {
  const boxBorder = { border: "1px solid #e8e8e8", padding: "1.5rem" }
  const ulStyle = {
    listStyle: "none",
    margin: "1rem 0 0 2rem",
    textAlign: "left",
  }

  const petsHelpList = [
    { item: "Flea treatment." },
    { item: "Heart worm or feline leukemia tests." },
    { item: "Spay/Neuter surgeries." },
    { item: "Canned food." },
    { item: "Winter heat." },
  ]
  const vaccines = [
    { name: "Rabies." },
    { name: "Distemper." },
    { name: "Hepatitis/ Adenovirus." },
    { name: "Parainfluenza." },
    { name: "Bordtella." },
    { name: "Leptospirosis." },
  ]
  const apiList = [
    { linkName: "Petfinder", linkURL: "https://www.petfinder.com/" },
    {
      linkName: "Petfinder for Developers",
      linkURL: "https://www.petfinder.com/developers/",
    },
    {
      linkName: "Documentation",
      linkURL: "https://www.petfinder.com/developers/v2/docs/",
    },
  ]
  const petWebsites = [
    { websiteName: "Cuddly", linkURL: "https://cuddly.com/" },
    {
      websiteName: "Mitchell County Animal Rescue",
      linkURL: "https://www.mitchellcountyanimalrescue.org/",
    },
    {
      websiteName: "The Humane Society",
      linkURL: "https://www.humanesociety.org/",
    },
    {
      websiteName: "Independent  Animal Rescue",
      linkURL: "https://animalrescue.net/",
    },
    {
      websiteName: "Adopt a Pet",
      linkURL: "https://www.adoptapet.com/",
    },
    {
      websiteName: "Cumberland County",
      linkURL: "https://www.cumberlandcountync.gov/home",
    },
  ]

  return (
    <Box
      sx={{
        marginBottom: "10rem",
        backgroundColor: "rgb(0, 128, 128, .5)",
        color: "white",
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={4} sx={boxBorder}>
          <Box>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "h6.fontSize", p: 1 }}
            >
              Furrdoption helps vulnerable pets in shelters around the country
              with:
            </Typography>
          </Box>
          <ul style={{ listStyle: "none", marginTop: "1rem" }}>
            {petsHelpList.map((list, index) => (
              <li key={index}>
                <PetsIcon />
                &nbsp;
                {list.item}
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item xs={4} sx={boxBorder}>
          <Box>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "h6.fontSize", p: 1 }}
            >
              Supports shelter medicine:
            </Typography>
          </Box>
          <Box>
            Furrdoption cares about underserved, homeless in need animals who
            had been treated with poorly and deserve a healthy environment to
            develop. Shelters provide food, water, medical care, and someone who
            would protect them.
          </Box>
        </Grid>
        <Grid item xs={4} sx={boxBorder}>
          <Box>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "h6.fontSize", p: 1 }}
            >
              Vaccinations
            </Typography>
          </Box>
          <ul style={{ listStyle: "none" }}>
            {vaccines.map((vaccine, index) => (
              <li key={index}>
                <PetsIcon />
                &nbsp;
                {vaccine.name}
              </li>
            ))}
          </ul>
        </Grid>
        <Grid item xs={6} sx={boxBorder}>
          <Box>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "h6.fontSize", p: 1 }}
            >
              With the help of Petfinder
            </Typography>
            Furrdoptions works with Petfinder's API which holds data from a
            large number of shelters around USA, Canada, and Mexico. Here are
            some resources that Furrdoption used to keep the most up to date
            data in this site:
          </Box>
          <ul style={ulStyle}>
            {apiList.map((api, index) => (
              <Box key={index}>
                <Link
                  target="_blank"
                  href={api.linkURL}
                  color="inherit"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  {api.linkName}
                </Link>
              </Box>
            ))}
          </ul>
        </Grid>
        <Grid item xs={6} sx={boxBorder}>
          <Box>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "h6.fontSize", p: 1 }}
            >
              Furrdoption used variety of different shelter's website examples
              as inspiration for its own creation:
            </Typography>
          </Box>
          <ul style={ulStyle}>
            {petWebsites.map((item, index) => (
              <Box key={index}>
                <Link
                  target="_blank"
                  href={item.linkURL}
                  color="inherit"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  {item.websiteName}
                </Link>
              </Box>
            ))}
          </ul>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AboutAssistanceBox
