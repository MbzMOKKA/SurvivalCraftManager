//Imports
import styled from "styled-components";
import { colors } from "../../utils";

//Local styles
export const StyledMain = styled.main`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledFeatures = styled.div`
    margin-top: 20vh;
    width: 50%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const StyledTitle = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 100%;
        animation: animLogo 4s infinite ease-in-out;
    }
    h1 {
        color: ${colors.primary};
    }
`;
