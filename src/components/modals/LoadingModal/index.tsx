//Imports
import React from "react";
import { StyledBackground, StyledModal, StyledText, StyledDots } from "./style";

//Component of the loading modals
export default function LoadingModal() {
    const loading = false;
    const text = "Loading";

    if (!loading) {
        return null;
    }

    return (
        <StyledBackground>
            <StyledModal className={"sc-box"}>
                <StyledText>{text}</StyledText>
                <StyledDots />
            </StyledModal>
        </StyledBackground>
    );
}
