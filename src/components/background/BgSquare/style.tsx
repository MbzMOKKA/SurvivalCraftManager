//Imports
import Styled from 'styled-components';

//Local styles
export const StyledSquare = Styled.div<{ initialDelay: number }>`
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0,0,0,0.4);
    ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: black;
        opacity: 0;
        animation: animBgGrid 4s ${({ initialDelay }) => initialDelay}s ease-in-out infinite;
    }
`;
