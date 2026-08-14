const fs = require("fs");
const YAML = require("yaml");

function parseOpenAPI(filePath) {
    const fileContent = fs.readFileSync(filePath, "utf8");

    const document = YAML.parse(fileContent);

    return document;
}

module.exports = parseOpenAPI;