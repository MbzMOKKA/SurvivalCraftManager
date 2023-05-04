//Imports
import { useLocation } from "react-router-dom";
import React from "react";
import { StyledBackButton, StyledNav, StyledPageInfos } from "./style";
import backArrow from "../../../assets/images/icons/back_arrow.png";

//Component of the navigation on the left
export default function Nav() {
    const location = useLocation();

    return (
        <StyledNav>
            <StyledBackButton route="back">
                <img src={backArrow} alt="Go back" draggable={false} />
            </StyledBackButton>
            <StyledPageInfos>{location.pathname}</StyledPageInfos>
        </StyledNav>
    );
}
