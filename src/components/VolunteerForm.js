import React from "react"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { ThemeProvider } from "@mui/material/styles"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { StyledButton } from "../Styles/StyledButton"
import { themeOptions } from "../Styles/themeOptions"

function VolunteerForm() {
  const [volunteer, setVolunteer] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  })
  const [volunteerOptions, setVolunteerOptions] = React.useState("")

  const handleVolunteer = (e) => {
    setVolunteer({
      ...volunteer,
      [e.target.name]: e.target.value,
    })
  }
  const handleChange = (e) => {
    setVolunteerOptions(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <ThemeProvider theme={themeOptions}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              <p style={{ fontWeight: 700, color: "#606060" }}>
                Volunteer With Furrdoption
              </p>
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={handleVolunteer}
                    value={volunteer.firstName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="lasttName"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    onChange={handleVolunteer}
                    value={volunteer.lastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleVolunteer}
                    value={volunteer.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-autowidth-label">
                      Volunter Options
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      value={volunteerOptions}
                      onChange={handleChange}
                      label="Volunteer Options"
                    >
                      <MenuItem value={"Foster"}>Foster a pet</MenuItem>
                      <MenuItem value={"Volunteer at Furrdoption"}>
                        Work with Furrdoption
                      </MenuItem>
                      <MenuItem value={"Service Credit"}>
                        Volunteer for service credit
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <StyledButton
                    variant="contained"
                    pill="true"
                    size="large"
                    color="secondary"
                    type="submit"
                    fullWidth
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Submit
                  </StyledButton>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default VolunteerForm
