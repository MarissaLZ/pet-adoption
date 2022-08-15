import * as React from 'react';
import firebase from "../Firebase/FirebaseConfig"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © House Sparrow Practicum '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const theme = createTheme();


//Login component allows users to login with google account or thier own email and password.
//Sets isLoggedIn state to true on login
//sends userProfile to App component to allow user info to be used in other components.
export default function Login({ handleLogin }) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    firebase.auth().signInWithEmailAndPassword(data.get('email'), data.get("password"))
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      handleLogin(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
  };

const googleProvider = new firebase.auth.GoogleAuthProvider()

const signInWithGoogle = () => {
  firebase.auth().signInWithPopup(googleProvider).then((res) => {
    handleLogin(res.user)
  }).catch((error) => {
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome to FURRDOPTION
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Button
              onClick={signInWithGoogle}
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              <img src="https://img.icons8.com/office/344/google-logo.png" style={{width: 30, margin: 7}} alt="google icon"/>
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
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}