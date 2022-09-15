import React from 'react'
import { Typography } from '@mui/material'
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

function EmptyListMessage() {
    return (
        <>
            <SentimentDissatisfiedIcon fontSize='large' />
            <Typography variant="h6"  >
                No pets were found in your area. Please try another zip code.
            </Typography>
        </>
    )
}

export default EmptyListMessage