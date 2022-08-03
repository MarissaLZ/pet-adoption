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
const PetCard = ({ pet }) => {
  return (
    <>
      <Card elevation={8} sx={{ maxWidth: 345, borderRadius: '18px' }}>
        <CardHeader
          title={pet.name}
          action={
            <IconButton onClick={() => console.log('Favorited')}> {/*Placeholder onClick */}
              <FavoriteIcon />
            </IconButton>
          }
        />
        <CardActionArea>
          <CardMedia
            component='img'
            height='250'
            image={pet.photos.length !== 0 ? pet.photos[0].full : null}
            alt={`Picture of ${pet.name}`}
          />
          <CardContent>
            <Grid container>
              <Grid item xs>
                <Typography variant="body2" color="text.secondary" component="div">
                  <b>Age:</b> {pet.age}
                </Typography>
              </Grid>
              <Grid item xs>
                <Typography variant="body2" color="text.secondary" component="div">
                  <b>Breed:</b> {pet.breeds.primary}
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body2" color="text.secondary" component="div">
              <b>Distance:</b> {`${pet.distance} mi`}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}

export default PetCard
