import { React } from "react"
import { Grid, Box } from "@mui/material"
import ZipCodeInput from "../components/ZipCodeInput"
import SearchButtons from "./SearchButtons"
import { StyledBox } from "../Styles/StyledBox"

const Search = () => {
  return (
    <StyledBox>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item sx={{ background: "" }}>
          <SearchButtons />
        </Grid>
        <Grid item sx={{ background: "" }}>
          <ZipCodeInput />
        </Grid>
      </Grid>
    </StyledBox>
  )
}
export default Search
