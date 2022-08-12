import React from "react";
import { Container, Grid, Box } from "@mui/material";
import  FooterItems  from "./FooterItems";
import styled from 'styled-components';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

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
                    <FacebookIcon alt="Facebook logo"/>
                    <TwitterIcon alt="Twitter logo"/>
                    <InstagramIcon alt="Instagram logo"/>
                </Box>
                <Box>
                    House Sparrow Practicum &reg; {new Date().getFullYear()}
                </Box>
            </Container>
        </Box>
        </FooterContainer>
    )
}