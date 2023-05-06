//Imports
const fs = require("fs");
const path = require("path");
const { convertXMLtoJS, convertJStoXML } = require("./conversions");
const { scPath } = require("./constants");

//Exports
async function fileRead(e, fileName) {
    const filePath = scPath + fileName;
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                reject(err);
                return;
            }
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
}

async function fileSave(event, filePath, data) {
    if (path.extname(filePath) === ".xml") {
        data = convertJStoXML(data);
    }
    fs.writeFile(scPath + filePath, data, (err) => {
        if (err) {
            console.error("Error saving file:", err);
            throw err;
        }
    });
}

module.exports = {
    fileRead,
    fileSave,
};
