import React from "react"
import styled from "styled-components"
import CircularProgress from "@mui/material/CircularProgress"

const LoadMessageContainer = styled.div`
  margin: 5rem;
  padding: 20px;
`

export default function LoadingMessage() {
  return (
    <LoadMessageContainer>
      <CircularProgress color="secondary" />
      <h3>Loading pets...</h3>
    </LoadMessageContainer>
  )
}
