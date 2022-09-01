import * as React from "react"
import Pagination from "@mui/material/Pagination"
import fetchPetList from "../components/fetchPetList"
import { useContext } from "react"
import { FurrdoptionContext } from "../FurrdoptionProvider"

function AdoptPagination() {
  const {
    search,
    pageNumber,
    setPageNumber,
    pageCount,
    setPageCount,
    setPetList,
  } = useContext(FurrdoptionContext)

  //changes pageNumber to the user clicked value
  const handlePageChange = (e, value) => {
    setPageNumber(value)
  }

  //will call fetchPetList any time pageNumber is changed
  React.useEffect(() => {
    window.scrollTo(0, 0)
    fetchPetList(
      search.zipcode,
      search.animalType,
      search.sortOption,
      pageNumber
    ).then((response) => {
      setPetList(response.animals)
      setPageCount(response.pagination.total_pages)
    })
  }, [pageNumber, search.sortOption])

  return (
    <Pagination
      default={1}
      page={pageNumber}
      count={pageCount}
      color="primary"
      onChange={handlePageChange}
    />
  )
}

export default AdoptPagination
