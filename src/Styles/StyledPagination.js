import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination"

export const StyledPagination = styled(Pagination)(({ theme }) => ({
    margin: 25,
    padding: 25,
    justifyContent: "center",
    display: 'flex'
}));