import React from "react"
import { useState } from "react"
import ZipCodeInput from "../components/ZipCodeInput"
import PetList from "../components/PetList"
import { LoadingContext } from "../context"
import LoadingMessage from "../components/LoadingMessage"
import Search from "../components/Search"


const Adopt = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
   <LoadingContext.Provider value={{isLoading, setIsLoading}}>
      <div>
      <ZipCodeInput />
      {isLoading === true ? <LoadingMessage/> 
        : <PetList/> }
      </div>
   </LoadingContext.Provider>
  )
}

export default Adopt
