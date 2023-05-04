declare interface Window {
    electronAPI: {
        fileRead: (fileName: string) => Promise<any>;
        fileSave: (fileName: string, data: any) => Promise<any>;
    };
}
