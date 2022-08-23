import React from "react"
import { Button } from "@mui/material"

const Donate = () => {

  const handleClick = (e) => {
    console.log("Clicked on donate button");
  };

  return (
    <div>
      <h1>Donate</h1>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        onClick={handleClick}>
        Donate
      </Button>
    </div>
  )
}

export default Donate
