//Imports
import React from "react";
import { useReadFile } from "../../utils/hooks/";

//Component of the manage Settings page
export default function Settings() {
    const data = useReadFile("Settings.xml");
    return (
        <main>
            <p>{JSON.stringify(data, null, 2)}</p>
        </main>
    );
}
