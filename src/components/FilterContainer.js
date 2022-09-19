// import { FurrdoptionContext } from "../FurrdoptionProvider"
// import { useContext } from "react"
import FilterGender from "./FilterGender"
import FilterSize from "./FilterSize"
import FilterAge from "./FilterAge"
import Grid from "@mui/material/Grid"

const FilterContainer = () => {
  // const {
  //     filterOption,
  //     setFilterOption,
  //     filterGenderOption,
  //     setFilterGenderOption,
  //     filterSizeOption,
  //     setFilterSizeOption,
  //     filterKidsOption,
  //     setFilterKidsOption} = useContext(FurrdoptionContext)

  return (
    <>
      {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
      {/* <Grid xs={6}> */}
      <FilterGender />
      {/* </Grid> */}
      <Grid xs={6}>
        <FilterSize />
      </Grid>
      {/* <Grid xs={6}> */}
      <FilterAge />
      {/* </Grid> */}
      {/* </Grid> */}
    </>
  )
}

export default FilterContainer
