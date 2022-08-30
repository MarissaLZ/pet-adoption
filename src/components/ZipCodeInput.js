import { Button, Stack, TextField } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import fetchPetList from "../components/fetchPetList"
import { useContext } from "react"
import { PetsContext } from "../context"
import { LoadingContext } from "../context"
import { SearchContext } from "../context"

const ZipCodeInput = () => {
  //using PetsContext, LoadingContext and SearchContext
  const { setPetList } = useContext(PetsContext)
  const { setIsLoading } = useContext(LoadingContext)
  const { search, handleSearch, setPageCount, pageNumber, setPageNumber } =
    useContext(SearchContext)

  //Validation. Gets value from the input and updates the zipCode state
  const handleZipcodeChange = (e) => {
    const userZipCode = e.target.value
    if (userZipCode.length <= 5) {
      handleSearch(e)
    }
  }
  //  makes a fetch request with current zip and selected animal type
  //should handleSubmit be included in the SearchContext and moved to <App/>?
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setPageNumber(1)
    fetchPetList(
      search.zipcode,
      search.animalType,
      search.sortOption,
      pageNumber
    ).then((response) => {
      setPetList(response.animals)
      setPageCount(response.pagination.total_pages)
      setIsLoading(false)
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
          variant="outlined"
          color="primary"
          endIcon={<SearchIcon />}
        >
          Search
        </Button>
      </Stack>
    </form>
  )
}

export default ZipCodeInput
