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

  const applyFilter = (param) => {
    if (param === filterType) {
      var replaceFilter= filterParams
      delete replaceFilter[filterType]
      console.log("What is this ", replaceFilter)
      setFilterParams(replaceFilter)
    }
    else {
    console.log("Adding the filter of", filterType, param)
    var newFilter = filterParams
    newFilter[filterType] = param
    setFilterParams(newFilter)
    }
  }

  const handleFilter = () => {
    setFilteredPetList([])
    const filteredResults = petList.filter((item) => {
        for (var key in filterParams) {
          if (item[key] === undefined || item[key] != filterParams[key])
            return false;
        }
        return item
    })
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
      setFilterGenderOption(e.target.value)
      //removeFilter(filterType) change this or remove based on new filter func
      // let filteredPages = Math.ceil(filteredPetList.length/20)
      // setPageCount(filteredPages)
      //setPageNumber(1)    
    }
    else {
      console.log(filterParams)
      setFilterGenderOption(e.target.value)
    }
    applyFilter(e.target.value)
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