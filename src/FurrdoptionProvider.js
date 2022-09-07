import React from "react"
import { useState, createContext } from "react"

const FurrdoptionContext = createContext({})

function FurrdoptionProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [userProfile, setUserProfile] = React.useState([])
  const [name, setName] = React.useState('')
  const [petList, setPetList] = React.useState([])
  const [isFavoritedList, setIsFavoritedList] = React.useState([])
  const [pageNumber, setPageNumber] = React.useState(1)
  const [pageCount, setPageCount] = React.useState(10)
  const [isLoading, setIsLoading] = useState(false)
  const [featuredPets, setFeaturedPets] = React.useState([])

  const [search, setSearch] = React.useState({
    zipcode: "",
    animalType: "",
    sortOption: "",
  })

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
        name,
        setName,
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
        featuredPets,
        setFeaturedPets,
      }}
    >
      {children}
    </FurrdoptionContext.Provider>
  )
}
//export both the Provider component and context
export { FurrdoptionProvider, FurrdoptionContext }
