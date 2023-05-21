//Imports
import React from "react";
import {
    StyledSetting,
    StyledDisplayName,
    StyledInputContainer,
} from "./style";
import { arrayStateUpdateElementAtIndex } from "../../../utils";

//Types
type SettingProps = {
    customData: any;
    saveFileData: any;
    index: number;
    setSettingsData: (any: any) => any;
};

//Component of a feature button in the homepage
export default function Setting(props: SettingProps) {
    const { customData, saveFileData, index, setSettingsData } = props;
    const { Name, Value } = saveFileData;

    function updateValue() {
        arrayStateUpdateElementAtIndex(setSettingsData, index, {
            $: { Name: Name, Value: "-10" },
        });
    }

    return (
        <StyledSetting>
            <StyledDisplayName>{customData.displayName}:</StyledDisplayName>
            <StyledInputContainer>{Value}</StyledInputContainer>
            <button onClick={updateValue}>TEST</button>
        </StyledSetting>
    );
}
