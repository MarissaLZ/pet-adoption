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

const Adopt = () => {
  const { petList, search, setFeaturedPets, isLoading } =
    useContext(FurrdoptionContext)

  //fetch featured pets only on the first render of the adopt page
  useEffect(() => {
    //set state of featured pets
    fetchFeatured("3").then((response) => {
      setFeaturedPets([...response.animals])
    })
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
          <>
            <SortDropDown />
            <PetList animalList={petList} />
            <AdoptPagination />
          </>
        ) : (
          <FeaturedPets />
        )}

        {/* {petList ? (
            <>
              <SortDropDown />
              {isLoading === true ? (
                <LoadingMessage />
              ) : (
                <>
                  <PetList animalList={petList} />
                </>
              )}
            </>
          ) : null} */}
      </div>
    </Box>
  )
}

export default Adopt
