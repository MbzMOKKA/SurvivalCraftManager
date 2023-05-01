//Imports
import React from "react";
import { StyledSquare } from "./style";

//Types
type BgSquareProps = {
    initialDelay: number;
};

//Component of a square in the background
export default function BgSquare(props: BgSquareProps) {
    const { initialDelay } = props;

    return <StyledSquare initialDelay={initialDelay} />;
}
