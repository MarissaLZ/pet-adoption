import React from "react"
import { useState, useEffect } from "react"
import PetList from "../components/PetList"
import SortDropDown from "../components/SortDropDown"
import { LoadingContext } from "../context"
import LoadingMessage from "../components/LoadingMessage"
import Search from "../components/Search"
import AdoptPagination from "../components/AdoptPagination"
import { Box } from "@mui/material"
import { useContext } from "react"
import { PetsContext, SearchContext } from "../context"
import FeaturedPets from "../components/FeaturedPets"
import { fetchFeatured } from "../components/petFinderAPI"

const Adopt = () => {
  const { petList } = useContext(PetsContext)
  const { search } = useContext(SearchContext)
  const { setFeaturedPets } = useContext(PetsContext)

  //fetch featured pets only on the first render of the adopt page
  useEffect(() => {
    //set state of featured pets
    fetchFeatured("3").then((response) => {
      setFeaturedPets([...response.animals])
    })
  }, [])

  const [isLoading, setIsLoading] = useState(false)
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
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
      </LoadingContext.Provider>
    </Box>
  )
}

export default Adopt
