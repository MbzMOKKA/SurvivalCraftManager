//Imports
import Styled from 'styled-components';
import { colorBordered } from '../../../utils/style/colors';

//Local styles
export const StyledGenericButton = Styled.button`
    background-color: ${colorBordered.gray.background};
    border-top: ${colorBordered.gray.borderTop} 3px solid;
    border-bottom: ${colorBordered.gray.borderBottom} 3px solid;
    border-left: ${colorBordered.gray.borderLeft} 3px solid;
    border-right: ${colorBordered.gray.borderRight} 3px solid;
    :active{
        border-top: ${colorBordered.gray.borderBottom} 3px solid;
        border-bottom: ${colorBordered.gray.borderTop} 3px solid;
        border-left: ${colorBordered.gray.borderRight} 3px solid;
        border-right: ${colorBordered.gray.borderLeft} 3px solid;
    }
    button{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: none;
    }
`;
