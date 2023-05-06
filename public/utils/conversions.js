//Imports
const xml2js = require("xml2js");
const xmlParser = new xml2js.Parser();
const xmlBuilder = new xml2js.Builder({ headless: true });

//Exports
function convertXMLtoJS(data) {
    return new Promise((resolve, reject) => {
        xmlParser.parseString(data, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

function convertJStoXML(data) {
    return xmlBuilder.buildObject(data);
}

module.exports = {
    convertXMLtoJS,
    convertJStoXML,
};
