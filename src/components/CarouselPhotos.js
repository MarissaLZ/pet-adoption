import { Paper, Card, CardMedia } from "@mui/material"
import PetImage from "../images/defaultImage.png"

const CarouselPhotos = ({ pet }) => {
  return (
    <Paper>
      <Card>
        <CardMedia
          component="img"
          height="400"
          image={pet.large}
          // image={pet.large === null ? pet.large : PetImage} //figure this out 
          alt="pet photo"
        />
      </Card>
    </Paper>
  )
}

export default CarouselPhotos
