const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    readFile: async (fileName) => {
        return await ipcRenderer.invoke("read-file", fileName);
    },
});
