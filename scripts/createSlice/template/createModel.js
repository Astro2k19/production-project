const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const reduxSliceTemplate = require('./reduxSliceTemplate');
const schemaTypeTemplate = require('./schemaTypeTemplate');

module.exports = async (layer, sliceName) => {
    const modelResolvePath = (...segments) => resolveRoot('src', layer, sliceName, 'model', ...segments);

    const createModelStructure = async () => {
        try {
            await fs.mkdir(modelResolvePath());
            await fs.mkdir(modelResolvePath('selectors'));
            await fs.mkdir(modelResolvePath('services'));
            await fs.mkdir(modelResolvePath('slice'));
            await fs.mkdir(modelResolvePath('types'));
        } catch (e) {
            console.log(`Failed to create model of ${sliceName} slice`, e)
        }
    }

    const createReduxSlice = async () => {
        try {
            await fs.writeFile(
                modelResolvePath('slice', `${sliceName}Slice.ts`),
                reduxSliceTemplate(sliceName)
            )
        } catch (e) {
            console.log(`Failed to create redux slice of the model segment!`, e)
        }
    }

    const createSchemaTypes = async () => {
        try {
            await fs.writeFile(
                modelResolvePath('types', `${sliceName}Schema.ts`),
                schemaTypeTemplate(sliceName)
            )
        } catch (e) {
            console.log(`Failed to create redux slice of the model segment!`, e)
        }
    }

    await createModelStructure();
    await createReduxSlice();
    await createSchemaTypes();
}
