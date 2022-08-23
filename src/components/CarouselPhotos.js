import { Paper, Card, CardMedia } from "@mui/material"

const CarouselPhotos = ({ photo }) => {
  return (
    <Paper>
      <Card>
        <CardMedia
          component="img"
          height="400"
          image={photo.photo}
          alt="pet photo"
        />
      </Card>
    </Paper>
  )
}

export default CarouselPhotos
