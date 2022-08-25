import { createContext } from "react"

//create a context
//default value is null
export const UserContext = createContext(null)
export const PetsContext = createContext(null)
export const LoadingContext = createContext(false)
export const SearchContext = createContext(null)