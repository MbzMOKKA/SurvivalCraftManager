//Imports
import React from "react";
import { StyledGenericButton } from "./style";

//Types
type GenericButtonProps = {
    className?: any;
    children: any;
    onClick: () => void;
};

//Component of a feature button in the homepage
export default function GenericButton(props: GenericButtonProps) {
    const { className, children, onClick } = props;

    return (
        <StyledGenericButton className={className} onClick={onClick}>
            {children}
        </StyledGenericButton>
    );
}
