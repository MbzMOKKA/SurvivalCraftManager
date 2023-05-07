//Imports
import React from "react";
import { StyledBackground, StyledModal, StyledText, StyledDots } from "./style";

//Component of the loading modals
export default function LoadingModal() {
    const text = "Loading";

    return (
        <StyledBackground>
            <StyledModal className={"sc-box"}>
                <StyledText>{text}</StyledText>
                <StyledDots />
            </StyledModal>
        </StyledBackground>
    );
}
