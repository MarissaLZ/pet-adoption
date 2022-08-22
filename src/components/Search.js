import { React } from "react"
import { Grid, Box } from "@mui/material"
import ZipCodeInput from "../components/ZipCodeInput"
import SearchButtons from "./SearchButtons"

const Search = () => {
  return (
    <Box sx={{ m: "5rem", background: "blue" }}>
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
