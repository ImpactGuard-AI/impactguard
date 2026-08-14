function extractEndpoints(openapi) {

    const endpoints = [];

    const paths = openapi.paths || {};

    for (const [path, pathItem] of Object.entries(paths)) {

        for (const [method, operation] of Object.entries(pathItem)) {

            const validMethods = [
                "get",
                "post",
                "put",
                "patch",
                "delete",
                "options",
                "head"
            ];

            if (!validMethods.includes(method.toLowerCase())) {
                continue;
            }

            endpoints.push({
                path,
                method: method.toUpperCase(),
                summary: operation.summary || "",
                parameters: operation.parameters || [],
                requestBody: operation.requestBody || null,
                responses: operation.responses || {}
            });
        }
    }

    return endpoints;
}

module.exports = extractEndpoints;