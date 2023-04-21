//Imports
import Styled from 'styled-components';
import LinkButton from '../../buttons/LinkButton';
import { navWidth } from '../../../utils/globalConstants';
import { colorBordered } from '../../../utils/style/colors';

//Local styles
export const StyledNav = Styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    width: ${navWidth * 100}vw;
    height: 100%;
`;

export const StyledBackButton = Styled(LinkButton)`
    width: 100%;
    height: ${navWidth * 100}vw;
    margin-bottom: 8px;
    background-color: ${colorBordered.green.background};
    border-top: ${colorBordered.green.borderTop} 3px solid;
    border-bottom: ${colorBordered.green.borderBottom} 3px solid;
    border-left: ${colorBordered.green.borderLeft} 3px solid;
    border-right: ${colorBordered.green.borderRight} 3px solid;
    :active{
        border-top: ${colorBordered.green.borderBottom} 3px solid;
        border-bottom: ${colorBordered.green.borderTop} 3px solid;
        border-left: ${colorBordered.green.borderRight} 3px solid;
        border-right: ${colorBordered.green.borderLeft} 3px solid;
    }
    img {
        width: 40%;
    }
`;

export const StyledPageInfos = Styled.div`
    flex: 1;
    background-color: ${colorBordered.green.background};
    border-top: ${colorBordered.green.borderTop} 3px solid;
    border-bottom: ${colorBordered.green.borderBottom} 3px solid;
    border-left: ${colorBordered.green.borderLeft} 3px solid;
    border-right: ${colorBordered.green.borderRight} 3px solid;
`;
