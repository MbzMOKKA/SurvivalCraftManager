//Imports
import { useEffect, useState } from "react";

//Returns the data of a given file from its name
export default function useReadFile(fileName: string) {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function readFile() {
            try {
                const fileData = await window.electronAPI.readFile(fileName);
                setData(fileData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        readFile();
    }, [fileName]);

    return data;
}
