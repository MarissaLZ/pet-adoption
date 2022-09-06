import React, {useContext} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FurrdoptionContext } from '../FurrdoptionProvider';

//I need to have the selection set the petList from the filter. Import the context, figure
//out the labels
const FilterDropdown = ({}) => {
   const {filterGenderOption, setFilterGenderOption} = useContext(FurrdoptionContext)
   const filterType = "Filter by gender"
   //const genderSelectionValues= ["Female","Male"]
   const selectionValue= "test"
  const handleChange = (e: SelectChangeEvent) => {
    setFilterGenderOption(e.target.value)
    console.log(filterGenderOption)
  };
  //const genderFilterItems= [filterType/filter-pets-gender, filterGenderOption /*this is the state*/ 
  //, menuLabel, selectionValue array]
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id={filterType}>{filterGenderOption}</InputLabel>
      <Select
        labelId={filterType}
        id="select"
        value={filterGenderOption}
        label="Gender"
        autoWidth
        onChange={handleChange}
      >
        <MenuItem value={filterType}>
            <em>{filterType}</em>
        </MenuItem>
        <MenuItem value={selectionValue}>{selectionValue}</MenuItem>
        <MenuItem value={selectionValue}>{selectionValue}</MenuItem>
      </Select>
    </FormControl>
  );
}
export default FilterDropdown