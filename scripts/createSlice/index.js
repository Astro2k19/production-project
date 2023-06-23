const createTemplate = require('./template/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layers = ['entities', 'features', 'pages']

if (!layer && !layers.includes(layer)) {
    throw Error(
        'Only these layers are allowed' + layers.join(', ')
    );
}

if (!sliceName) {
    throw Error(
        'You must specify slice name!'
    );
}

createTemplate(layer, sliceName);
