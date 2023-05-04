//Imports
import React from "react";
import { useReadFile, fileSave } from "../../utils";
import { StyledMain } from "./style";

//Component of the manage Settings page
export default function Settings() {
    const data: any = useReadFile("Settings.xml");
    const settings: any[] = data?.Settings?.Setting || [];
    //console.log(settings);

    const testData = {
        root: {
            example: {
                item: "Content",
            },
        },
    };

    return (
        <StyledMain>
            <button
                onClick={() => {
                    fileSave("test.xml", testData);
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
