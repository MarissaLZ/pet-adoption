import React from "react";
import PetCard from "./PetCard";
import Grid from "@mui/material/Grid";
//Recieves list from parent page or component and maps through it as pet cards
export default function PetList ({petsList}) {
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