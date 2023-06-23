const path = require('path');

module.exports = (...pathSegments) => path.resolve(__dirname,'..', '..', ...pathSegments);
