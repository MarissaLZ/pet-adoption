import React from "react"
import { useState, createContext } from "react"

//create a context
//default value is null
// const furrdoptionContext = [
//     UserContext,
//     PetsContext,
//     LoadingContext,
//     SearchContext
// ]

// const UserContext = createContext(null)
// const PetsContext = createContext(null)
// const LoadingContext = createContext(false)
// const SearchContext = createContext(null)

const FurrdoptionContext = createContext({})

function FurrdoptionProvider({ children }) {
  //Login and user states
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [userProfile, setUserProfile] = React.useState([])
  //Adopt page states
  const [petList, setPetList] = React.useState([])
  const [isFavoritedList, setIsFavoritedList] = React.useState([])
  const [pageNumber, setPageNumber] = React.useState(1)
  const [pageCount, setPageCount] = React.useState(10)
  const [isLoading, setIsLoading] = useState(false)
  //Filter box states
  const [filterOption, setFilterOption] = React.useState([])
  const [filteredPetList, setFilteredPetList] = React.useState([])
  const [filterGenderOption, setFilterGenderOption] = React.useState("")
  const [filterSizeOption, setFilterSizeOption] = React.useState("")
  const [filterKidsOption, setFilterKidsOption] = React.useState("")
  const [filterParams, setFilterParams] = React.useState({})
  //Search state
  const [search, setSearch] = React.useState({
    zipcode: "",
    animalType: "",
    sortOption: "",
    FilterOption: "",
  })
  console.log("search state", search)

  const handleSearch = (e) => {
    setSearch({
      ...search, //copy the old search properties in a new object
      [e.target.name]: e.target.value, // dynamically replace a key value pair name of the target will become the key
    })
  }

  return (
    <FurrdoptionContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        userProfile,
        setUserProfile,
        petList,
        setPetList,
        isFavoritedList,
        setIsFavoritedList,
        search,
        setSearch,
        pageNumber,
        setPageNumber,
        pageCount,
        setPageCount,
        handleSearch,
        isLoading,
        setIsLoading,
        filterOption,
        setFilterOption,
        filterParams,
        setFilterParams,
        filteredPetList,
        setFilteredPetList,
        filterGenderOption,
        setFilterGenderOption,
        filterSizeOption,
        setFilterSizeOption,
        filterKidsOption,
        setFilterKidsOption,
      }}
    >
      {children}
      {/* <UserContext.Provider value={{}}>
        <PetsContext.Provider>
          <LoadingContext> {children}</LoadingContext>
        </PetsContext.Provider>
      </UserContext.Provider> */}
    </FurrdoptionContext.Provider>
  )
}
//export both the Provider component and context
export { FurrdoptionProvider, FurrdoptionContext }
