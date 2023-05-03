//Imports
import React from "react";
import { useEffect, useState } from "react";

//Component of the manage Settings page
export default function Settings() {
    const [xmlData, setXmlData] = useState(null);

    useEffect(() => {
        async function readXMLFile() {
            try {
                const data = await window.electronAPI.readXMLFile(
                    "Settings.xml"
                );
                setXmlData(data);
            } catch (error) {
                console.error("Error fetching XML data:", error);
            }
        }

        readXMLFile();
    }, []);

    return (
        <main>
            <p>{JSON.stringify(xmlData, null, 2)}</p>
        </main>
    );
}
