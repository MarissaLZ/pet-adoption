import React from "react"
import styled from "styled-components"

const LoadMessageContainer = styled.div`
  margin: 15px;
  padding: 20px;
`

export default function LoadingMessage() {
  return (
    <LoadMessageContainer>
      <h3>Loading pets....</h3>
    </LoadMessageContainer>
  )
}
