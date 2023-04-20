//Imports
import Styled from 'styled-components';
import { squareSize } from '../../../utils/globalConstants';

//Local styles
export const StyledGrid = Styled.div`
position: fixed;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(${squareSize}px, 1fr));
grid-template-rows: repeat(auto-fit, minmax(${squareSize}px, 1fr));
width: 100vw;
height: 100vh;
z-index: -9;
`;
