const firstLetterUppercase = require("../firstLetterUppercase");

module.exports = (sliceName) => {
  const typedSliceName = firstLetterUppercase(sliceName);
  return ` export interface ${typedSliceName}Schema {
    
    }`;
};
