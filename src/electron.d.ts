declare interface Window {
    electronAPI: {
        readXMLFile: (fileName: string) => Promise<any>;
    };
}
