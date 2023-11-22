//Imports
import styled from "styled-components";
import { colors } from "../../../utils";

//Local styles
export const StyledLine = styled.div`
    position: relative;
    background-color: ${colors.primary};
    width: 95%;
    height: 8px;
`;

export const StyledBar = styled.div`
    position: absolute;
    background-color: ${colors.bordered.gray.background};
    border-top: ${colors.bordered.gray.borderTop} 3px solid;
    border-bottom: ${colors.bordered.gray.borderBottom} 3px solid;
    border-left: ${colors.bordered.gray.borderLeft} 3px solid;
    border-right: ${colors.bordered.gray.borderRight} 3px solid;
    width: 40px;
    height: 52px;
    top: -21px;
    left: 0px;
`;
