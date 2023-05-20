//Imports
import styled from "styled-components";
import GenericButton from "../../components/buttons/GenericButton";

//Local styles
export const StyledMain = styled.main`
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
`;

export const StyledList = styled.ul`
    width: 100%;
    height: 100%;
`;

export const StyledBottomControls = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

export const StyledSaveButton = styled(GenericButton)`
    font-size: 32px;
    padding: 8px;
    margin-top: 20px;
`;
