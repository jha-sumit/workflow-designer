import styled from "styled-components";

export const StyledPaper = styled("div")`
    padding: ${(props) => props.theme.spacing(2)};
    text-align: center;
    color: ${(props) => props.theme.palette.text.secondary};
`;