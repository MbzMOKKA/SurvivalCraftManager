//Imports
import Styled from 'styled-components';

//Local styles
export const StyledMain = Styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`;

export const StyledFeatures = Styled.div`
    margin-top: 20vh;
    width: 50%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const StyledTitle = Styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items:center;
    img {
        width: 100%;
        animation: animLogo 4s infinite ease-in-out;
    }
`;
