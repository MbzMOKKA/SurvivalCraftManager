//Imports
import styled from "styled-components";
import { colors } from "../../../utils";

//Local styles
export const StyledGenericButton = styled.button`
    background-color: ${colors.bordered.gray.background};
    border-top: ${colors.bordered.gray.borderTop} 3px solid;
    border-bottom: ${colors.bordered.gray.borderBottom} 3px solid;
    border-left: ${colors.bordered.gray.borderLeft} 3px solid;
    border-right: ${colors.bordered.gray.borderRight} 3px solid;
    :active {
        border-top: ${colors.bordered.gray.borderBottom} 3px solid;
        border-bottom: ${colors.bordered.gray.borderTop} 3px solid;
        border-left: ${colors.bordered.gray.borderRight} 3px solid;
        border-right: ${colors.bordered.gray.borderLeft} 3px solid;
    }
    button {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        border: none;
    }
`;
