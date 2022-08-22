import React from "react"
import styled from "styled-components";

export default const LoadingMessage = () => {
    const LoadMessageContainer = styled.div`
    margin: 15px;
    padding: 20px;
    `;
    return (
        <LoadMessageContainer>
            <h3>
                Fetching pets near you....
            </h3>
        </LoadMessageContainer>
    )
};