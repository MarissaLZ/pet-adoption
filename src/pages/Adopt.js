import React from "react"
import { useState } from "react"
import PetList from "../components/PetList"
import SortDropDown from "../components/SortDropDown"
import { LoadingContext } from "../context"
import LoadingMessage from "../components/LoadingMessage"
import Search from "../components/Search"
import AdoptPagination from "../components/AdoptPagination"
import { Box } from "@mui/material"
import { useContext } from "react"
import { PetsContext, SearchContext } from "../context"
import AdoptInfo from "../components/AdoptInfo"

const Adopt = () => {
  const { petList } = useContext(PetsContext)
  const { search } = useContext(SearchContext)

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
            <PetList animalList={petList} />
          ) : (
            <AdoptInfo />
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
