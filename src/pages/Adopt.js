import React from "react"
import { useState } from "react"
import PetList from "../components/PetList"
import { LoadingContext } from "../context"
import LoadingMessage from "../components/LoadingMessage"
import Search from "../components/Search"
import AdoptPagination from "../components/AdoptPagination"


const Adopt = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
   <LoadingContext.Provider value={{isLoading, setIsLoading}}>
      <div>
      <Search />
      {isLoading === true ? <LoadingMessage/>
        : <PetList/><AdoptPagination/> }
      </div>
   </LoadingContext.Provider>
  )
}

export default Adopt
