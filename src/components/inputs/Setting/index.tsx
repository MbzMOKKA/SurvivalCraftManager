//Imports
import React from "react";
import {
    StyledSetting,
    StyledDisplayName,
    StyledInputContainer,
} from "./style";

//Types
type SettingProps = {
    displayName: string;
    value: any;
};

//Component of a feature button in the homepage
export default function Setting(props: SettingProps) {
    const { displayName, value } = props;

    return (
        <StyledSetting>
            <StyledDisplayName>{displayName}:</StyledDisplayName>
            <StyledInputContainer>{value}</StyledInputContainer>
        </StyledSetting>
    );
}
