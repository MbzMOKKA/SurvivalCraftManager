declare interface Window {
    electronAPI: {
        readFile: (fileName: string) => Promise<any>;
    };
}
