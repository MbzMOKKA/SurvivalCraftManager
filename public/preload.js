const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    readXMLFile: async (fileName) => {
        return await ipcRenderer.invoke("read-xml-file", fileName);
    },
});
