import * as React from "react"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"

export default function SearchButtons() {
  return (
    <FormControl>
      <FormLabel id="row-radio-buttons-group-label">Pet Type:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="cat" control={<Radio />} label="Cats" />
        <FormControlLabel value="dog" control={<Radio />} label="Dogs" />
      </RadioGroup>
    </FormControl>
  )
}
