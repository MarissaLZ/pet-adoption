import { React, useState } from "react"
import ZipCodeInput from "../components/ZipCodeInput"
import PetList from "../components/PetList"
import { LoadingContext } from "../context"
import LoadingMessage from "../components/LoadingMessage"

const Adopt = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <LoadingContext.Provider value={{isLoading, setIsLoading}}>
      <div>
        {isLoading = true ? <LoadingMessage/> 
        : <PetList/> }
        <ZipCodeInput />
      </div>
    </LoadingContext.Provider>
  )
}

export default Adopt
