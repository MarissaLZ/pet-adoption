import { useState } from "react"
import { Button, Stack, TextField } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"


const ZipCodeInput = ({ handlePetRequest }) => {

  const [zipcodeFormValues, setZipcodeFormValues] = useState("")

  //Gets value from the input and updates the zipCode state
  const handleZicodeChange = (e) => {
    const userZipCode = e.target.value
    if (userZipCode.length <= 5) {
      setZipcodeFormValues(userZipCode)
    }
  }

  //OnSubmit Form consoles the user input
  const handleSubmit = (e) => {
    e.preventDefault()
    handlePetRequest(zipcodeFormValues);
    setZipcodeFormValues("")
  }

  return (
    <form style={{ marginTop: "2rem" }} onSubmit={handleSubmit}>
      <Stack spacing={2} direction="row">
        <TextField
          label="Zip Code"
          size="small"
          color="secondary"
          name="zipCode"
          value={zipcodeFormValues}
          onChange={handleZicodeChange}
          required={true}
          inputProps={{ inputMode: "numeric", pattern: "[0-9]{5}" }}
        />
        <Button
          type="submit"
          size="small"
          variant="outlined"
          color="secondary"
          endIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Stack>
    </form>
  )
}

export default ZipCodeInput