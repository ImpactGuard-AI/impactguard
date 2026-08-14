const parseOpenAPI = require("./parser");
const extractEndpoints = require("./extractEndpoints");
const extractSchemas = require("./extractSchemas");

const openapi = parseOpenAPI("./examples/openapi.yaml");

const endpoints = extractEndpoints(openapi);
const schemas = extractSchemas(openapi);

const result = {
    endpoints,
    schemas
};

console.log(JSON.stringify(result, null, 2));