import React from "react"
import PetList from "../components/PetList"
import Search from "../components/Search"
import AdoptPagination from "../components/AdoptPagination"

const Adopt = () => {
  return (
    <div>
      <Search />
      <PetList />
      <AdoptPagination />
    </div>
  )
}

export default Adopt
