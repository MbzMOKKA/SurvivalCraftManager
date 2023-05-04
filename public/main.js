const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");
const xml2js = require("xml2js");
const isDev = require("electron-is-dev");
require("@electron/remote/main").initialize();

const parser = new xml2js.Parser();
const builder = new xml2js.Builder({ headless: true });

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

// Quit when all windows are closed.
app.on("window-all-closed", function () {
    app.quit();
});

app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

//Convert XML data into JS object
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

//To read a file
ipcMain.handle("file-read", async (e, fileName) => {
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

//To save a file
ipcMain.handle("file-save", (event, filePath, data) => {
    const appPath = app.getPath("userData");
    const xmlString = builder.buildObject(data);

    fs.writeFile(appPath + "\\" + filePath, xmlString, (err) => {
        if (err) {
            console.error("Error saving file:", err);
            throw err;
        }
        console.log("Save!");
    });
});
