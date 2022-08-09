import React from "react";
import { Container, Grid, Box } from "@mui/material";
import  FooterItems  from "./FooterItems";
export default function Footer () {
    return (
        <footer>
        <Box sx={{
            backgroundColor: "gray"
        }}>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <FooterItems/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        </footer>
    )
}