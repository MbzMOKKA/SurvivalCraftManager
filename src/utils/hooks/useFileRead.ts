//Imports
import { useEffect, useState } from "react";

//Returns the data of a given file from its name
export default function useFileRead(fileName: string) {
    const [data, setData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        async function fileRead() {
            setIsLoaded(false);
            try {
                const fileData = await window.electronAPI.fileRead(fileName);
                setData(fileData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            setIsLoaded(true);
        }
        fileRead();
    }, [fileName]);

    return { data, isLoaded };
}
