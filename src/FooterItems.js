import React from "react";
import { Link, Box } from "@mui/material";
export default function FooterItems () {
    //lists of all the links, there isnt' an about us page yet so that link is # for now
    const siteLinks = [{linkName: "Adopt", linkURL: "adopt"}, {linkName: "Volunteer", linkURL: "volunteer"}, {linkName: "Donate", linkURL: "donate"}, {linkName: "About", linkURL: "about"}];
    const projectLinks = [{linkName: "Code The Dream", linkURL: "https://codethedream.org/"}, {linkName: "About Us", linkURL: "#"}];
    const resourceLinks = [{linkName: "Material UI", linkURL: "https://mui.com/"}, {linkName: "Firebase", linkURL: "https://firebase.google.com/"}, {linkName: "Figma", linkURL: "https://figma.com"}];
    return (
        <>
        <Box borderBottom={1}>Site Links</Box>
        {siteLinks.map((item)=> (
            <Box>
            <Link href={item.linkURL} underline="hover" color="inherit" rel="noreferrer">
                {item.linkName}
            </Link>
            </Box>
        ))}
        <Box borderBottom={1}>About This Project</Box>
        {projectLinks.map((item)=> (
            <Box>
            <Link href={item.linkURL} underline="hover" color="inherit" rel="noreferrer">
                {item.linkName}
            </Link>
            </Box>
        ))}
        <Box borderBottom={1}>Resources Used</Box>
        {resourceLinks.map((item)=> (
            <Box>
            <Link href={item.linkURL} underline="hover" color="inherit" rel="noreferrer">
                {item.linkName}
            </Link>
            </Box>
        ))}
        </>
    )
}