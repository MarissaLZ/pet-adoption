import { Paper, Card, CardMedia } from "@mui/material"

const CarouselPhotos = ({ pet }) => {
  return (
    <Paper>
      <Card>
        <CardMedia
          component="img"
          height="500"
          image={pet.full}
          alt="pet photo"
        />
      </Card>
    </Paper>
  )
}

export default CarouselPhotos
