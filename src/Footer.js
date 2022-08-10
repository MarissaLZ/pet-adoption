import React from "react";
import { Container, Grid, Box } from "@mui/material";
import  FooterItems  from "./FooterItems";
import styled from 'styled-components';
export default function Footer () {
    const FooterContainer = styled.div`
    padding: 20px;
    background: #CED0CE;
    `;

    return (
        <FooterContainer>
        <Box>
            <Container maxWidth="lg">
                <Grid container direction="row" spacing={5}>
                    <FooterItems/>
                </Grid>
                <Box>
                    <img src="..src/SocialIcons/twitterlogo.svg"
                    alt="Twitter logo"/>
                </Box>
                <Box>
                    House Sparrow Practicum &reg; {new Date().getFullYear()}
                </Box>
            </Container>
        </Box>
        </FooterContainer>
    )
}