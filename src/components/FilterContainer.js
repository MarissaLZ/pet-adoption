import FilterDropdown from "./FilterDropdown";
import { FurrdoptionContext } from "../FurrdoptionProvider";
import { useContext } from "react";
import FilterGender from "./FilterGender";
const FilterContainer = () => {
    const {
        filterOption, 
        setFilterOption,
        filterGenderOption,
        setFilterGenderOption,
        filterSizeOption,
        setFilterSizeOption,
        filterKidsOption,
        setFilterKidsOption} = useContext(FurrdoptionContext)
    const genderSelectionValues = ["Female", "Male", "Unknown"]
    const sizeSelectionValues = ["Small", "Medium", "Large"]
    const kidsSelectionValues = ["Good with Kids"]
    //petList[i].environment.Good_with_kids is not a string the matches the menu text, 
    //so it needs seperate terms for the filtering
    const kidsFilterTerms = [true]

    return(
       <>
            <FilterGender 
                filterType={"gender"} 
                filterName={"Filter by gender"}
                selectionValue={genderSelectionValues}
                filterState={filterGenderOption}
                params={genderSelectionValues}
            />

        </>
    )
}

export default FilterContainer