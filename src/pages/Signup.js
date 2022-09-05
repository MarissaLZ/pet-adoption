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
import { Link as RouterLink, Navigate } from "react-router-dom"
import firebase from "../Firebase/FirebaseConfig"
import { useContext } from "react"
import { FurrdoptionContext } from "../FurrdoptionProvider"

const theme = createTheme()

export default function SignUp() {
  const { isLoggedIn, setIsLoggedIn } = useContext(FurrdoptionContext)

  const [inputErrors, setInputError] = React.useState({
    isError: false,
    message: "",
  })

  console.log("inputErrors", inputErrors)
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
    //authenticates a user signing up
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        signup.email,
        signup.password,
        signup.firstName
      )
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user
        console.log("user", user)
        //adds a user to the firebase users collection
        firebase.firestore().collection("users").doc(user.uid).set({
          username: user.email,
          email: user.email,
          firstName: signup.firstName,
        })
        setIsLoggedIn(!isLoggedIn)
        //resets error
        // setInputError({
        //   ...inputErrors,
        //   isError: false,
        //   message: "",
        // })
      })
      .catch((error) => {
        handleError(error)
      })
  }
  const handleError = (error) => {
    console.log("handle error runs")
    console.log(error.message)
    //Error is an object that firebase returns, contains message, code and name
    const message = error.message
      .replace("Firebase: ", "")
      .replace(" ( auth/weak-password)", "")
      .replace(". (auth/invalid-email)", "")
    //sets the error message to display on the sign up page if authentification invalid
    setInputError({
      ...inputErrors,
      isError: true,
      message: message,
    })
  }
  //redirects user to home page is signup is successful
  if (isLoggedIn) {
    return <Navigate to="/" />
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
            minHeight: "100vh",
          }}
        >
          {inputErrors.isError && (
            <div style={{ color: "red" }}>{inputErrors.message}</div>
          )}
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
              <Grid item xs={12}>
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
              <Grid item sx={{ mb: 1 }}>
                <Link component={RouterLink} to="/login">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
