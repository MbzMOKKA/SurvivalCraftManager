//Imports
import styled from "styled-components";
import { bgSquareSize } from "../../../../utils/globalConstants";

//Local styles
export const StyledGrid = styled.div`
    box-sizing: content-box;
    position: fixed;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${bgSquareSize}px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(${bgSquareSize}px, 1fr));
    width: 100vw;
    height: 100vh;
    z-index: -9;
`;
