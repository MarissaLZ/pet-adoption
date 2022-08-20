import { React, useState } from "react"
import {
  Typography,
  Button,
  Stack,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Grid,
  Box,
} from "@mui/material"
import ZipCodeInput from "../components/ZipCodeInput"
import SearchButtons from "./SearchButtons"

const Search = () => {
  const [Search, setSearch] = useState({
    zipcode: "",
    animalType: "",
  })

  return (
    <Box sx={{ m: "5rem", background: "yellow" }}>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item sx={{ background: "orange" }}>
          <SearchButtons />
        </Grid>
        <Grid item sx={{ background: "green" }}>
          <ZipCodeInput />
        </Grid>
      </Grid>
    </Box>
  )
}
export default Search
