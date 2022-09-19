import React from "react"
import Dialog from "@mui/material/Dialog"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import { StyledButton } from "../Styles/StyledButton"
import {
  Grid,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  DialogTitle,
} from "@mui/material"

// AdoptionForm has an "Adopt Me" button. When clicked, the Adoption Form displays
// as a pop-up using Dialog
const AdoptionForm = () => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <StyledButton
        pill="true"
        variant="contained"
        size="large"
        color="secondary"
        onClick={handleClickOpen}
      >
        Adopt Me
      </StyledButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogTitle id="Pet Adoption Form" align="center">
            Pet Adoption Form
          </DialogTitle>
          <TextField
            required
            autoFocus
            margin="dense"
            id="pet-name"
            label="Name of the pet you want to adopt"
            fullWidth
            variant="outlined"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <div style={{ display: "flex" }}>
            <TextField
              required
              margin="dense"
              id="adopers-first-name"
              label="Adopter's Name"
              placeholder="First Name"
              size="small"
              sx={{ width: "29ch" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              required
              margin="dense"
              id="adopters-last-name"
              placeholder="Last Name"
              size="small"
              sx={{ m: 1, width: "29ch" }}
            />
          </div>
          <TextField
            required
            fullWidth
            margin="dense"
            id="address"
            label="Address"
            placeholder="Street Address"
            size="small"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <div style={{ display: "flex" }}>
            <TextField
              required
              margin="dense"
              id="city"
              placeholder="City"
              size="small"
            />
            <TextField
              required
              margin="dense"
              id="state"
              placeholder="State"
              size="small"
            />
            <TextField
              required
              margin="dense"
              id="zipcode"
              placeholder="Zipcode"
              size="small"
            />
          </div>
          <TextField
            required
            margin="dense"
            id="email"
            label="Email"
            size="small"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            required
            margin="dense"
            id="phone-number"
            label="Phone Number"
            size="small"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControl>
            <FormLabel id="radio-buttons-group" component="legend">
              Do you currently have any pets?
            </FormLabel>
            <RadioGroup
              aria-labelledby="radio-buttons-group"
              name="radio-buttons-group"
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          <TextField
            id="outlined-multiline-static"
            label="If you currently have pets, please list them bellow:"
            multiline
            fullWidth
            margin="dense"
            rows={4}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <DialogActions>
            <Grid container justify="space-between">
              <Button
                autoFocus
                onClick={handleClose}
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
            </Grid>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AdoptionForm
