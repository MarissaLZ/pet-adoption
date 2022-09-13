import React, {useContext} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FurrdoptionContext } from '../FurrdoptionProvider';
let filteredPetList = []
//I need to have the selection set the petList from the filter. Import the context, figure
//out the labels
//
//Save petList to new state of filteredList-figure out how to display filtered list if filtered, 
//else revert to petList
//
//Maybe store filter params as state, have map or forEach use of custom filter function?
//
const FilterDropdown = ({selectionValue, filterType, filterState, filterSetter, filterParams}) => {
   const {petList, setPetList,
    filterGenderOption, setFilterGenderOption, 
    filterSizeOption, setFilterSizeOption,
    filterKidsOption, setFilterKidsOption} = useContext(FurrdoptionContext)
  const handleFilter = (filterParams) => {
    for (let i = 0 ; i < petList.length ; i++ ) 
      if(petList[i].filterParams = filterParams) {
        filteredPetList.push(petList[i])
      }
    }

  // }
  //fix the filter and return below!!!!!!!
  const handleChange = (e) => {
    //console.log("event", e.target.value)
    if (e.target.value != filterType) {
      filterSetter(e.target.value)
      handleFilter(filterParams)
    }
    else {
      console.log("Not a filter term")
    }
    console.log(filteredPetList)
    // setIsLoading(true)
    // petList.filter((item) => {
    //     return 
    // })
    // //setPetList()
    // setPageCount(response.pagination.total_pages)
    // setIsLoading(false)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id={filterType}>{filterType}</InputLabel>
      <Select
        labelId={filterType}
        id="select"
        value={filterState}
        label={filterType}
        autoWidth
        onChange={handleChange}
      >
        <MenuItem value={filterType}>
            <em>{filterType}</em>
        </MenuItem>
        {selectionValue.map((option) => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
export default FilterDropdown