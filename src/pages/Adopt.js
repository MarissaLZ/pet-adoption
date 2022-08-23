import React from "react"
import PetList from "../components/PetList"
import SortDropDown from "../components/SortDropDown"
import Search from "../components/Search"

const Adopt = () => {
  return (
    <div>
      <Search />
      <SortDropDown />
      <PetList />
    </div>
  )
}

export default Adopt
