import * as React from "react"
import firebase from "../Firebase/FirebaseConfig"
import PasswordReset from "../components/PasswordReset"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Link from "@mui/material/Link"
import { Link as RouterLink } from "react-router-dom"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { FurrdoptionContext } from "../FurrdoptionProvider"

const theme = createTheme()

//Login component allows users to login with google account or thier own email and password.
//Sets isLoggedIn state to true on login
//sends userProfile to App component to allow user info to be used in other components.
export default function Login() {
  //using UserContext
  const { setIsLoggedIn, setUserProfile, isLoggedIn } =
    useContext(FurrdoptionContext)
  console.log(isLoggedIn)
  //navigate hook redirects the login page to home page
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    firebase
      .auth()
      .signInWithEmailAndPassword(data.get("email"), data.get("password"))
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user
        setIsLoggedIn(true)
        setUserProfile(user)
        navigate("/")
      })
      .catch((error) => {
        var errorCode = error.code
        var errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  const googleProvider = new firebase.auth.GoogleAuthProvider()

  const signInWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        setIsLoggedIn(true)
        setUserProfile(res.user)

        //adds a user to the firebase users collection
        firebase.firestore().collection("users").doc(res.user.uid).set({
          username: res.user.email,
          email: res.user.email,
          firstName: res.user.displayName,
        })
      })

      .catch((error) => {
        console.log(error.message)
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
            minHeight: "100vh",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome to FURRDOPTION
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Button
              onClick={signInWithGoogle}
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              <img
                src="https://img.icons8.com/office/344/google-logo.png"
                style={{ width: 30, margin: 7 }}
                alt="google icon"
              />
              <span> Continue with Google</span>
            </Button>
            <span>Have a password? Continue with your email address</span>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
          <Grid container>
            <Grid item xs>
              <PasswordReset />
            </Grid>
            <Grid item>
              <Link component={RouterLink} to="/Signup">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
