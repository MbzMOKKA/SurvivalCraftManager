//Imports
import React, { useEffect, useState } from "react";
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
    const [settingsData, setSettingsData] = useState<any[]>([]);
    const { data: rawSettingsData, isLoaded: settingsAreLoaded }: any =
        useReadFile("Settings.xml");

    //save the savefile's data in the state
    useEffect(() => {
        if (settingsAreLoaded) {
            setSettingsData(rawSettingsData.Settings.Setting);
        }
    }, [rawSettingsData, settingsAreLoaded]);

    function applyChanges() {
        fileSave("test.xml", {
            Settings: {
                Setting: settingsData,
            },
        });
    }

    return (
        <StyledMain>
            <StyledList className="sc-box scrollable">
                {settingsData.length > 0 &&
                    settings.map((setting, index) => {
                        let saveFileIndex = -1;
                        const saveFileData = settingsData.find(
                            (elem, index) => {
                                if (elem.$.Name === setting.technicalName) {
                                    saveFileIndex = index;
                                    return true;
                                }
                                return false;
                            }
                        ).$;
                        return (
                            <Setting
                                key={index}
                                customData={setting}
                                saveFileData={saveFileData}
                                index={saveFileIndex}
                                setSettingsData={setSettingsData}
                            />
                        );
                    })}
            </StyledList>
            <StyledBottomControls>
                <StyledSaveButton onClick={applyChanges}>
                    Apply Changes
                </StyledSaveButton>
            </StyledBottomControls>
        </StyledMain>
    );
}
