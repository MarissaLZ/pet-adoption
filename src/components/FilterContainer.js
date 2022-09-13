import FilterDropdown from "./FilterDropdown";
import { FurrdoptionContext } from "../FurrdoptionProvider";
import { useContext } from "react";
const FilterContainer = () => {
    const {
        filterGenderOption, setFilterGenderOption, 
        filterSizeOption, setFilterSizeOption,
        filterKidsOption, setFilterKidsOption} = useContext(FurrdoptionContext)
    const genderSelectionValues = ["Female", "Male", "Unknown"]
    const sizeSelectionValues = ["Small", "Medium", "Large"]
    const kidsSelectionValues = ["Good with Kids"]
    //petList[i].environment.Good_with_kids is not a string the matches the menu text, 
    //so it needs seperate terms for the filtering
    const kidsFilterTerms = [true]

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
                filterParams={genderSelectionValues}
            />
            <FilterDropdown 
                filterType={"Filter by size"} 
                selectionValue={sizeSelectionValues}
                filterState={filterSizeOption}
                filterSetter={setFilterSizeOption} 
                filterParams={sizeSelectionValues}
            />
            <FilterDropdown 
                filterType={"Status with Kids"} 
                selectionValue={kidsSelectionValues}
                filterState={filterKidsOption}
                filterSetter={setFilterKidsOption} 
                filterParams={kidsFilterTerms}
            />
        </>
    )
}

export default FilterContainer