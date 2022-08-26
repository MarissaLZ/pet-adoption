import { Paper, Card, CardMedia } from "@mui/material"

const CarouselPhotos = ({ pet }) => {
  return (
    <Paper>
      <Card>
        <CardMedia
          component="img"
          height="400"
          image={pet.large}
          alt="pet photo"
        />
      </Card>
    </Paper>
  )
}

export default CarouselPhotos
