import FilterDropdown from "./FilterDropdown";
import { FurrdoptionContext } from "../FurrdoptionProvider";
import { useContext } from "react";
const FilterContainer = () => {
    const {
        filterGenderOption, setFilterGenderOption, 
        filterSizeOption, setFilterSizeOption,
        filterKidsOption, setFilterKidsOption} = useContext(FurrdoptionContext)
    const genderSelectionValues = ["Female", "Male"]
    const sizeSelectionValues = ["Small","Large"]
    const kidsSelectionValues = ["Good with Kids", "Not good with Kids"]
    return(
        /*
        The filter boxes that each have the following set of props:
         filterType/filter-pets-gender, menuValue, menuLabel, selectionValue array
         
        */
       <>
            <FilterDropdown 
                filterType={"Filter by gender"} 
                selectionValue={genderSelectionValues}
                filterState={filterGenderOption}
                filterSetter={setFilterGenderOption}
            />
            <FilterDropdown 
                filterType={"Filter by size"} 
                selectionValue={sizeSelectionValues}
                filterState={filterSizeOption}
                filterSetter={setFilterSizeOption} 
            />
            <FilterDropdown 
                filterType={"Status with Kids"} 
                selectionValue={kidsSelectionValues}
                filterState={filterKidsOption}
                filterSetter={setFilterKidsOption} 
            />
        </>
    )
}

export default FilterContainer