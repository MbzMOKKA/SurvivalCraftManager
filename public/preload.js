const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    fileRead: async (fileName) => {
        return await ipcRenderer.invoke("file-read", fileName);
    },
    fileSave: async (fileName, data) => {
        return await ipcRenderer.invoke("file-save", fileName, data);
    },
});
