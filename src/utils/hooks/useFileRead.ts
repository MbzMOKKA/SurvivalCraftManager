//Imports
import { useEffect, useState } from "react";

//Returns the data of a given file from its name
export default function useFileRead(fileName: string) {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fileRead() {
            try {
                const fileData = await window.electronAPI.fileRead(fileName);
                setData(fileData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fileRead();
    }, [fileName]);

    return data;
}
