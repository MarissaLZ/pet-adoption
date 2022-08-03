import React from "react";
import PetCard from "./PetCard";
import Grid from "@mui/material/Grid";
//Recieves list from parent page or component and maps through it as pet cards
//I don't know what the pet object recieved back looks like, so I put in a placeholder for the key prop
const PetList = ({petsList}) => {
    return (
        <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="flex-start"
        alignItems="center">
            {petsList.map((pet)=> (
            <Grid key={pet.id} item xs={4}>
                <PetCard pet={pet}/>
            </Grid>))}
        </Grid>
    )
}

export default PetList;
