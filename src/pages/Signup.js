import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { Link as RouterLink } from "react-router-dom"
import { UserContext } from "../context"
import { useContext } from "react"

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import firebase from "../Firebase/FirebaseConfig"

const theme = createTheme()

export default function SignUp() {
  const { isLoggedIn, setIsLoggedIn, userProfile, setUserProfile } =
    useContext(UserContext)

  const [signup, setSignup] = React.useState({
    firstName: "",
    email: "",
    password: "",
  })
  console.log("signup", signup)

  const handleChange = (e) => {
    setSignup({
      ...signup,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    firebase
      .auth()
      .createUserWithEmailAndPassword(signup.email, signup.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user.email
        console.log("user", user)
        firebase.firestore().collection("users").add({
          user: user,
        })
      })
      .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
        // ..
      })
  }

  return (
    <ThemeProvider theme={theme}>
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <span>Have a password? Continue with your email address</span>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleChange}
                  value={signup.firstName}
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
                  onChange={handleChange}
                  value={signup.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                  value={signup.password}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item sx={{ mb: 8 }}>
                <RouterLink to="/Login">
                  <Link>Already have an account? Sign in</Link>
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
