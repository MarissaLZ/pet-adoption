import React from "react"
import { useState, createContext } from "react"
import firebase from "./Firebase/FirebaseConfig"

const FurrdoptionContext = createContext({})

function FurrdoptionProvider({ children }) {
  //Login and user states
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [userProfile, setUserProfile] = React.useState([])
  const [name, setName] = React.useState("")
  const [petList, setPetList] = React.useState([])
  const [isFavoritedList, setIsFavoritedList] = React.useState([])
  const [pageNumber, setPageNumber] = React.useState(1)
  const [pageCount, setPageCount] = React.useState(10)
  const [isLoading, setIsLoading] = useState(false)
  const [featuredPets, setFeaturedPets] = React.useState([])
  const [err, setErr] = React.useState(false)
  const [coordinates, setCoordinates] = useState({ lat: "", long: "" })

  const [search, setSearch] = React.useState({
    zipcode: "",
    animalType: "",
    sortOption: "distance",
    filterGenderOption: "",
    filterSizeOption: "",
    filterAgeOption: "",
  })

  const handleSearch = (e) => {
    setSearch({
      ...search, //copy the old search properties in a new object
      [e.target.name]: e.target.value, // dynamically replace a key value pair name of the target will become the key
    })
  }

  //React.useEffect retrives auth state from firebase local storage and sets isLoggedIn to true if there is a user profie avaiable in local storage
  //isLoggedIn will be false and userProfile will be an empty array when users are not logged in, when users sign out, or when users change their password.
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setIsLoggedIn(true)
        setUserProfile(user)
      } else {
        setIsLoggedIn(false)
        setUserProfile([])
      }
    })
  }, [setIsLoggedIn, setUserProfile])

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
        err,
        setErr,
        coordinates,
        setCoordinates,
      }}
    >
      {children}
    </FurrdoptionContext.Provider>
  )
}
//export both the Provider component and context
export { FurrdoptionProvider, FurrdoptionContext }
