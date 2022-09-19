import React, {useContext, useEffect} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FurrdoptionContext } from '../FurrdoptionProvider';

const FilterGender = ({selectionValue, filterName, filterType, filterState, params}) => {
  const {
    petList,
    setIsLoading,
    filterOption, setFilterOption,
    filterParams, setFilterParams,
    filteredPetList, setFilteredPetList,
    setPageCount,
    pageNumber, setPageNumber,
    filterGenderOption, setFilterGenderOption,
  } = useContext(FurrdoptionContext)

//Rename add filter to reset?
  const addFilter = (param) => {
    if (filterGenderOption === "") {
      var replaceFilter= filterParams
      //replaceFilter.filterType = null
      delete replaceFilter.filterType
      setFilterParams(replaceFilter)
    }
    console.log("Adding the filter of", filterType, param)
    var newFilter = filterParams
    //newFilter.push({[filterType]: param}) change to add key: value pair
    newFilter[filterType] = param
   setFilterParams(newFilter)
  }
  // const removeFilter = (name) => {
  //     let filters = filterParams
  //     const newParams = filters.filter(

  //     )
  //     console.log(name, "Is what should be deleted and the newParams array is ", newParams)
  //     setFilterParams(newParams)
  // }
  const handleFilter = (filterParam) => {
    setFilteredPetList([])
    function filteredResults () {
      return petList.filter(param => {return petList.param !== param})
    }
    
      setFilteredPetList(filteredResults)
    }  
    //Fires on menu change
    useEffect(() => {
      handleFilter(filterParams)
    }, [filterGenderOption]);

  const handleChange = (e) => {
    if (e.target.value === filterType) {
      //setFilterParams(param => [...param, filterParams])
      console.log(filterParams)
      setFilterGenderOption("")
      //removeFilter(filterType) change this or remove based on new filter func
      // let filteredPages = Math.ceil(filteredPetList.length/20)
      // setPageCount(filteredPages)
      //setPageNumber(1)    
    }
    else {
      console.log(filterParams)
      setFilterGenderOption(e.target.value)
    }
    addFilter(e.target.value)
    console.log("Filter params are now ", filterParams)
    console.log("Filtered list is ", filteredPetList)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id={filterType}>{filterName}</InputLabel>
      <Select
        labelId={filterName}
        id="select"
        value={filterState}
        label={filterName}
        autoWidth
        onChange={handleChange}
      >
        <MenuItem value={filterType}>
            <em>{filterName}</em>
        </MenuItem>
        {selectionValue.map((option) => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
export default FilterGender