function extractSchemas(openapi) {

    const schemas =
        openapi.components?.schemas || {};

    const result = {};

    for (const [name, schema] of Object.entries(schemas)) {

        result[name] = {
            type: schema.type || null,
            required: schema.required || [],
            properties: {}
        };

        const properties = schema.properties || {};

        for (const [propertyName, property] of Object.entries(properties)) {

            result[name].properties[propertyName] = {
                type: property.type || null,
                enum: property.enum || null,
                reference: property.$ref || null
            };
        }
    }

    return result;
}

module.exports = extractSchemas;