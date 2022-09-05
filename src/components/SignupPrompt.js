import React from "react"
import Dialog from "@mui/material/Dialog"
import Button from "@mui/material/Button"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import { Grid, DialogTitle } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import FavoriteIcon from "@mui/icons-material/Favorite"
import CloseIcon from "@mui/icons-material/Close"
import { useNavigate } from "react-router-dom"
import { FurrdoptionContext } from "../FurrdoptionProvider"

//SignupPrompt pops up when the user tries to favorite a pet without being loggedIn
const SignupPrompt = ({ pet, isFavorited, toggleFavorite }) => {
  //navigate hook redirects the login page to home page
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false)
  const { isLoggedIn } = React.useContext(FurrdoptionContext)
  const handleClickOpen = () => {
    if (isLoggedIn) {
      toggleFavorite(pet)
    } else {
      setOpen(true)
    }
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSignUpNavigate = () => {
    navigate("/Signup")
  }

  const handleLoginNavigate = () => {
    return navigate("/login")
  }

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <FavoriteIcon sx={isFavorited ? { color: "red" } : null} />
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            {" "}
            <CloseIcon />
          </IconButton>

          <DialogTitle id="join" align="center" variant="h3">
            Join Furrdoption to Favorite Pets!
          </DialogTitle>
          <DialogActions>
            <Grid container justify="space-between">
              <Button
                autoFocus
                onClick={handleLoginNavigate}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>
          </DialogActions>
          <DialogActions>
            <Grid container justify="space-between">
              <Button
                autoFocus
                onClick={handleSignUpNavigate}
                type="submit"
                variant="contained"
                fullWidth
              >
                Create account
              </Button>
            </Grid>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default SignupPrompt
