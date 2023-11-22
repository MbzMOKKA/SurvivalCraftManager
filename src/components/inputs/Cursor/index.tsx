//Imports
import React from "react";
import { StyledLine, StyledBar } from "./style";

//Types
type CursorProps = {};

//Component of a feature button in the homepage
export default function Cursor(props: CursorProps) {
    return (
        <StyledLine>
            <StyledBar />
        </StyledLine>
    );
}
