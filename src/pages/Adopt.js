import React, { useContext } from "react"
import PetList from "../components/PetList"
import SortDropDown from "../components/SortDropDown"
import LoadingMessage from "../components/LoadingMessage"
import Search from "../components/Search"
import AdoptPagination from "../components/AdoptPagination"
import { Box } from "@mui/material"
import { FurrdoptionContext } from "../FurrdoptionProvider"

const Adopt = () => {
  const { isLoading } = useContext(FurrdoptionContext)

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
        <SortDropDown />
        {isLoading === true ? (
          <LoadingMessage />
        ) : (
          <>
            <PetList />
            <AdoptPagination />
          </>
        )}
      </div>
    </Box>
  )
}

export default Adopt
