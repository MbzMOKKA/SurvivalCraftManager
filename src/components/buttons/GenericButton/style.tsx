//Imports
import Styled from 'styled-components';

//Local styles
export const StyledGenericButton = Styled.button`
    margin: 12px 18px;
    background-color: #6C675C;
    border-top: #B5AC9A 3px solid;
    border-bottom: #36332E 3px solid;
    border-left: #514D45 3px solid;
    border-right: #90897B 3px solid;
    :active{
        border-top: #36332E 3px solid;
        border-bottom: #B5AC9A 3px solid;
        border-left: #90897B 3px solid;
        border-right: #514D45 3px solid;
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
