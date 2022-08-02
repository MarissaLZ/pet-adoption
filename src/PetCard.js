import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';

//PetCard component takes in pet prop. 
//The card contains the pet's image, name, age, and breed and a heart button/Icon to favorite pet
// The card (bellow card header) is clickable to redirect if we decide to
// Added placeholder prop info in some fields. ****ERASE COMMENTS ONCE CORRECTLY ENTERED****
const PetCard = ({ pet }) => {
  return (
    <>
      <Card elevation={8} sx={{ maxWidth: 345, borderRadius: '18px' }}>
        <CardHeader
          title="pet.name"
          action={
            <IconButton onClick={() => console.log('Favorited')}> {/*Placeholder onClick */}
              <FavoriteIcon />
            </IconButton>
          }
        />
        <CardActionArea> {/*CardActionArea makes the card clickable to redirect */}
          {/* CardMedia PLACEHOLDER info */}
          <CardMedia
            component='img'
            height='140'
            image='pet.image'
            alt='pet.description'
          />
          <CardContent>
            <Grid container>
              <Grid item xs>
                <Typography variant="body2" color="text.secondary" component="div">
                  <b>Age:</b> {'pet.age'} {/* PLACEHOLDER */}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="body2" color="text.secondary" component="div">
                  <b>Breed:</b> {'pet.breed'} {/* PLACEHOLDER */}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}

export default PetCard