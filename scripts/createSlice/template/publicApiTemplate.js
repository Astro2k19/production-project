const firstLetterUppercase = require('../firstLetterUppercase');

module.exports = (sliceName) => {
const componentName = firstLetterUppercase(sliceName)

return `export { ${componentName} } from './ui/${componentName}/${componentName}'  
export { ${componentName}Schema } from './model/types/${componentName}Schema'
`;
}
