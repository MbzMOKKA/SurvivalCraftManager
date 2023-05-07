//Imports
import styled from "styled-components";
import LoadingDots from "../../other/loading/LoadingDots";

//Local styles
export const StyledBackground = styled.div`
    position: fixed;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledDots = styled(LoadingDots)`
    margin: 52px;
`;

export const StyledText = styled.p`
    font-size: 42px;
    margin: 52px;
`;
