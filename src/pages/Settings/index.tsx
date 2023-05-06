//Imports
import React from "react";
import { useReadFile, fileSave } from "../../utils";
import { StyledMain } from "./style";

//Component of the manage Settings page
export default function Settings() {
    const data: any = useReadFile("Settings.xml");
    const settings: any[] = data?.Settings?.Setting || [];
    //console.log(settings);

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
            <button
                onClick={() => {
                    fileSave("test.xml", testObj);
                }}
            >
                SAVE
            </button>
            {/* <p>{JSON.stringify(data, null, 2)}</p> */}
            {data &&
                settings.map((setting, index) => {
                    return (
                        <p key={index}>
                            {setting.$.Name} = {setting.$.Value}
                        </p>
                    );
                })}
        </StyledMain>
    );
}
