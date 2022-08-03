import { useState } from "react"
import { Button, Stack, TextField, Autocomplete } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

/*
[x] Component accepts address prop which contains zip code and state
[x] Create a form that holds an input field and search button.
[] Data validation (still working on the select state validation)
[x] Create a function that consoles the user input (zip code) when button is click

Questions:
1. Should validate the form with formik? 
2. What's the best practice for form validation in the field?
*/

const stateData = ["NC", "NY", "NJ", "SC"] //Fake data

const ZipCodeInput = ({ address }) => {
  const [validation, setValidation] = useState("[0-9]*") //State for form validation
  const [zipcodeFormValues, setZipcodeFormValues] = useState({
    zipCode: "",
    state: "" || null,
  })

  //Gets value from the input and updates the zipCode state
  const handleZicodeChange = (e) => {
    const userZipCode = e.target.value
    setZipcodeFormValues({ ...zipcodeFormValues, zipCode: userZipCode })
    setValidation(userZipCode)
  }

  //Gets value from the input and updates the STATE state
  const handleStateChange = (e) => {
    const userZipCode = e.target.value
    setZipcodeFormValues({ ...zipcodeFormValues, state: userZipCode })
  }

  //OnSubmit Form consoles the user input
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(zipcodeFormValues)
    setZipcodeFormValues({
      zipCode: "",
      state: "",
    })
  }

  /*
  Material UI handles data validation (for <TextField/> component) with the following props: 
  -error (which is a state where you can add a condition)
  -helperText (which gives the user a feedback of is wrong with the value)
  */

  return (
    <form style={{ marginTop: "2rem" }} onSubmit={handleSubmit}>
      <Stack spacing={2} direction="row">
        <TextField
          label="Zip Code"
          size="small"
          color="secondary"
          name="zipCode"
          value={zipcodeFormValues.zipCode}
          onChange={handleZicodeChange}
          error={validation.trim().length === 0}
          required={true}
          helperText={validation.trim().length === 0 ? "Invalid zip code" : ""}
          inputProps={{ pattern: "[0-9]*" }}
        />

        <Autocomplete
          name="state"
          options={stateData} //Fake data
          color="secondary"
          getOptionLabel={(option) => option}
          renderInput={(state) => <TextField {...state} label="Select State" />} //Renders the state and provides and input field(<TextField/>)
          value={zipcodeFormValues.state}
          onChange={handleStateChange}
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
