import React, {useContext} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FurrdoptionContext } from '../FurrdoptionProvider';

//I need to have the selection set the petList from the filter. Import the context, figure
//out the labels
const FilterDropdown = ({selectionValue, filterType, filterState, filterSetter}) => {
   const {
    filterGenderOption, setFilterGenderOption, 
    filterSizeOption, setFilterSizeOption,
    filterKidsOption, setFilterKidsOption} = useContext(FurrdoptionContext)
  
  const handleChange = (e: SelectChangeEvent) => {
    filterSetter(e.target.value)
    console.log("event", e.target.value)
  };

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
        <MenuItem value={selectionValue[0]}>{selectionValue[0]}</MenuItem>
        <MenuItem value={selectionValue[1]}>{selectionValue[1]}</MenuItem>
      </Select>
    </FormControl>
  );
}
export default FilterDropdown