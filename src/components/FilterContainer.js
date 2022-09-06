import FilterDropdown from "./FilterDropdown";
import { FurrdoptionContext } from "../FurrdoptionProvider";
import { useContext } from "react";
const FilterContainer = () => {
    const {filterGenderOption, setFilterGenderOption} = useContext(FurrdoptionContext)
    
    return(
        /*
        The filter boxes that each have the following set of props:
         filterType/filter-pets-gender, menuValue, menuLabel, selectionValue array
         filterType={filterType} selectionValue={genderSelectionValues}
        */
       <FilterDropdown />
    )
}

export default FilterContainer