import * as React from "react"
import Pagination from "@mui/material/Pagination"
import { fetchPetList } from "./petFinderAPI"
import { useContext } from "react"
import { FurrdoptionContext } from "../FurrdoptionProvider"
import LoadingMessage from "../components/LoadingMessage"

function AdoptPagination() {
  const {
    search,
    pageNumber,
    setPageNumber,
    pageCount,
    setPageCount,
    setPetList,
    isLoading,
    setIsLoading,
  } = useContext(FurrdoptionContext)

  //changes pageNumber to the user clicked value
  //vale is the current page nubmer
  const handlePageChange = (e, value) => {
    setIsLoading(true)
    setPageNumber(value)
    window.scrollTo(0, 0)
    //make a fetch request any time a page number is clicked
    fetchPetList(
      search.zipcode,
      search.animalType,
      search.sortOption,
      value
    ).then((response) => {
      setPetList(response.animals)
      setPageCount(response.pagination.total_pages)
      setIsLoading(false)
    })
  }

  return isLoading ? (
    <LoadingMessage />
  ) : (
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
