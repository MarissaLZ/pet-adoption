import React from "react"
import ZipCodeInput from "../components/ZipCodeInput"
import PetList from "../components/PetList"
import SortDropDown from "../components/SortDropDown"

const Adopt = () => {
  return (
    <div>
      <SortDropDown />
      <PetList />
      <ZipCodeInput />
    </div>
  )
}

export default Adopt
