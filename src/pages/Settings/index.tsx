//Imports
import React from "react";
import { useReadFile, fileSave } from "../../utils";
import {
    StyledMain,
    StyledList,
    StyledSaveButton,
    StyledBottomControls,
} from "./style";
import settings from "../../data/settings";
import Setting from "../../components/inputs/Setting";

//Component of the manage Settings page
export default function Settings() {
    const { data: rawSettingsData, isLoaded: settingsAreLoaded }: any =
        useReadFile("Settings.xml");
    const settingsData: any[] = rawSettingsData?.Settings?.Setting || [];

    const testData = [
        { Name: "SoundsVolume", Value: "0.5" },
        { Name: "MusicsVolume", Value: "1" },
    ];

    const testObj = {
        Settings: {
            Setting: testData.map((setting) => {
                return { $: setting };
            }),
        },
    };

    return (
        <StyledMain>
            <StyledList className="sc-box scrollable">
                {settingsAreLoaded &&
                    settings.map((setting, index) => {
                        const saveFileData = settingsData.find(
                            (elem) => elem.$.Name === setting.technicalName
                        ).$;
                        return (
                            <Setting
                                key={index}
                                displayName={setting.displayName}
                                value={saveFileData.Value}
                            />
                        );
                    })}
            </StyledList>
            <StyledBottomControls>
                <StyledSaveButton
                    onClick={() => {
                        fileSave("test.xml", testObj);
                    }}
                >
                    Apply Changes
                </StyledSaveButton>
            </StyledBottomControls>
        </StyledMain>
    );
}
