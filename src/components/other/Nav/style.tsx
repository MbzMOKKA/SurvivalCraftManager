//Imports
import styled from "styled-components";
import LinkButton from "../../buttons/LinkButton";
import { colors } from "../../../utils";
import { navWidth } from "../../../utils";

//Local styles
export const StyledNav = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    width: ${navWidth * 100}vw;
    height: 100%;
`;

export const StyledBackButton = styled(LinkButton)`
    width: 100%;
    height: ${navWidth * 100}vw;
    margin-bottom: 8px;
    background-color: ${colors.bordered.green.background};
    border-top: ${colors.bordered.green.borderTop} 3px solid;
    border-bottom: ${colors.bordered.green.borderBottom} 3px solid;
    border-left: ${colors.bordered.green.borderLeft} 3px solid;
    border-right: ${colors.bordered.green.borderRight} 3px solid;
    :active {
        border-top: ${colors.bordered.green.borderBottom} 3px solid;
        border-bottom: ${colors.bordered.green.borderTop} 3px solid;
        border-left: ${colors.bordered.green.borderRight} 3px solid;
        border-right: ${colors.bordered.green.borderLeft} 3px solid;
    }
    img {
        width: 40%;
    }
`;

export const StyledPageInfos = styled.div`
    flex: 1;
    background-color: ${colors.bordered.green.background};
    border-top: ${colors.bordered.green.borderTop} 3px solid;
    border-bottom: ${colors.bordered.green.borderBottom} 3px solid;
    border-left: ${colors.bordered.green.borderLeft} 3px solid;
    border-right: ${colors.bordered.green.borderRight} 3px solid;
`;
