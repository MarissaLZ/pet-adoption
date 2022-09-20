import FilterGender from "./FilterGender"
import FilterSize from "./FilterSize"
import FilterAge from "./FilterAge"
import { Box, Stack, Typography } from "@mui/material"

const FilterContainer = () => {
  return (
    <>
      <Stack
        direction="column"
        justifyContent="space-evenly"
        alignItems="flex-start"
        sx={{
          width: 180,
          height: 300,
          textAlign: "start",
          padding: "1rem 0 0 5rem",
        }}
      >
        <Typography variant="subtitle1" sx={{ color: "#606060" }}>
          Filter by:
        </Typography>
        <Box>
          <FilterGender />
        </Box>
        <Box>
          <FilterSize />
        </Box>
        <Box>
          <FilterAge />
        </Box>
      </Stack>
    </>
  )
}

export default FilterContainer
