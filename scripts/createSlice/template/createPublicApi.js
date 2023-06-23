const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const publicApiTemplate = require('./publicApiTemplate');

module.exports = async (layer, sliceName) => {
    const publicApiResolvePath = (...segments) => resolveRoot('src', layer, sliceName, ...segments);

    try {
        await fs.writeFile(
            publicApiResolvePath('index.ts'),
            publicApiTemplate(sliceName)
        );
    } catch (e) {
        console.log(`Failed to create public api of ${sliceName} slice`, e)
    }
}
