//Imports
import React from "react";
import { StyledDot } from "./style";

//Types
type LoadingDotProps = {
    active: boolean;
};

//Component of loading dots
export default function LoadingDot(props: LoadingDotProps) {
    const { active } = props;

    return <StyledDot active={active} />;
}
