const { app, BrowserWindow, ipcMain } = require("electron");

const path = require("path");
const fs = require("fs");
const xml2js = require("xml2js");
const isDev = require("electron-is-dev");

require("@electron/remote/main").initialize();
const parser = new xml2js.Parser();

function createWindow() {
    // Create the browser window.
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

// Quit when all windows are closed.
app.on("window-all-closed", function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

function convertXMLtoJS(data) {
    return new Promise((resolve, reject) => {
        parser.parseString(data, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

// Listen for the 'read-file' event from the renderer process
ipcMain.handle("read-file", async (e, fileName) => {
    const filePath = `C:/Users/dylan/AppData/Local/Packages/20961CandyRufusGames.Survivalcraft2_c7jxg4av36ap6/LocalState/${fileName}`;

    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                reject(err);
                return;
            }

            // Check if the file has a .xml extension
            if (path.extname(fileName) === ".xml") {
                convertXMLtoJS(data)
                    .then((result) => {
                        resolve(result);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            } else {
                resolve(data);
            }
        });
    });
});
