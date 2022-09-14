import { useEffect } from "react"
import PetList from "../components/PetList"
import SortDropDown from "../components/SortDropDown"
import Search from "../components/Search"
import AdoptPagination from "../components/AdoptPagination"
import { Box } from "@mui/material"
import { useContext } from "react"
import FeaturedPets from "../components/FeaturedPets"
import { fetchFeatured } from "../components/petFinderAPI"
import { FurrdoptionContext } from "../FurrdoptionProvider"
import LoadingMessage from "../components/LoadingMessage"

const Adopt = () => {
  const { petList, search, setFeaturedPets, isLoading, setIsLoading } =
    useContext(FurrdoptionContext)

  //fetch featured pets only on the first render of the adopt page
  useEffect(() => {
    //set state of featured pets
    setIsLoading(true)
    fetchFeatured("3").then((response) => {
      setFeaturedPets([...response.animals])
      setIsLoading(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <div>
        <Search />
        {search.validSearch ? (
          isLoading ? (
            <LoadingMessage />
          ) : (
            <>
              <SortDropDown />
              <PetList animalList={petList} />
              <AdoptPagination />
            </>
          )
        ) : isLoading ? (
          <LoadingMessage />
        ) : (
          <FeaturedPets />
        )}
      </div>
    </Box>
  )
}

export default Adopt
