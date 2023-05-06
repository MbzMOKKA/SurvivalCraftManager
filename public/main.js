//Imports
const { fileRead, fileSave } = require("./utils/fileManagement");
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
require("@electron/remote/main").initialize();

//const appPath = app.getPath("userData");

//Events
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            enableRemoteModule: true,
            contextIsolation: true,
            nodeIntegrationInWorker: true,
            nodeIntegrationInSubFrames: true,
            preload: path.join(__dirname, "preload.js"),
        },
    });

    win.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "../build/index.html")}`
    );
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
    app.quit();
});

app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

//IPC Main handles
ipcMain.handle("file-read", fileRead);

//To save a file
ipcMain.handle("file-save", fileSave);
