//Imports
import styled from "styled-components";
import { colors } from "../../../../utils";

//Local styles
export const StyledDot = styled.div<{ active: boolean }>`
    margin: 12px;
    width: ${({ active }) => (active ? "20" : "12")}px;
    height: ${({ active }) => (active ? "20" : "12")}px;
    background-color: ${({ active }) => (active ? "white" : colors.unusable)};
`;
