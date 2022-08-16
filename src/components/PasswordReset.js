import * as React from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

//Form that accepts user's email to send a password reset email for thier FURRDOPTION account
function PasswordReset() {

  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenAlert(false);
  };

  const auth = getAuth();

  const handleReset = (event)=> {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    sendPasswordResetEmail(auth, data.get('email'))
      .then(() => {
        setOpenAlert(true)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }

  return (
    <>
      <Link onClick={handleClickOpen} sx={{ cursor: "pointer"}}>
        Forgot your Password?
      </Link>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography edge="start" variant="h6" component="div">
              FURRDOPTION
            </Typography>
          </Toolbar>
        </AppBar>
        <Container component="main" maxWidth="s">
          <CssBaseline />
          <Box sx={{ width: '100%' }}>
            <Collapse in={openAlert}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpenAlert(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mt: 2 }}
              >
                Email sent! - Check your spam folder.
              </Alert>
            </Collapse>
          </Box>
          <Box
            sx={{
              marginTop: 7,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
              Reset Your Password
            </Typography>
            <Typography>
              Please enter your email address to reset your password.
            </Typography>
            <Typography>
              We will email you a link to allow you to securely change your password.
            </Typography>
            <Box component="form" onSubmit={handleReset} noValidate sx={{ mt: 1 }}>
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
              >
                Reset
              </Button>
            </Box>
          </Box>
        </Container>
      </Dialog>
    </>
  );
}

export default PasswordReset
