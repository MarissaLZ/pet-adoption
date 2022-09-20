import { Button, Stack, TextField } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { fetchPetList } from "./petFinderAPI"
import { useContext } from "react"
import { FurrdoptionContext } from "../FurrdoptionProvider"

const ZipCodeInput = () => {
  const {
    setSearch,
    setPetList,
    setIsLoading,
    search,
    handleSearch,
    setPageCount,
    pageNumber,
    setPageNumber,
    setErr,
  } = useContext(FurrdoptionContext)

  //Validation. Gets value from the input and updates the zipCode state
  const handleZipcodeChange = (e) => {
    const userZipCode = e.target.value
    if (userZipCode.length <= 5) {
      handleSearch(e)
    }
  }
  //  makes a fetch request with current zip and selected animal type
  //should handleSubmit be included in the SearchContext and moved to <App/>?

  //if search is valid then we change to valid search. If search state is valid then we render petList?
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setPageNumber(1)
    setSearch({ ...search, validSearch: true })
    fetchPetList(
      search.zipcode,
      search.animalType,
      search.sortOption,
      pageNumber
    ).then((response) => {
      try {
        setPetList(response.animals)
        setPageCount(response.pagination.total_pages)
        setIsLoading(false)
        setErr(false)
      } catch (error) {
        e.preventDefault()
        setErr(true)
      }
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} direction="row">
        <TextField
          label="Zip Code"
          size="small"
          color="primary"
          name="zipcode"
          value={search.zipcode}
          onChange={handleZipcodeChange}
          required={true}
          inputProps={{ inputMode: "numeric", pattern: "[0-9]{5}" }}
        />
        <Button
          type="submit"
          size="small"
          variant="contained"
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
