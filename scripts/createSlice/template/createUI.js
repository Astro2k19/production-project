const fs = require("fs/promises");
const resolveRoot = require("../resolveRoot");
const storiesTemplate = require("./storiesTemplate");
const styleTemplate = require("./styleTemplate");
const componentTemplate = require("./componentTemplate");
const firstLetterUppercase = require("../firstLetterUppercase");

module.exports = async (layer, sliceName) => {
  const modelResolvePath = (...segments) =>
    resolveRoot("src", layer, sliceName, "ui", ...segments);
  const createUiStructure = async () => {
    try {
      await fs.mkdir(modelResolvePath());
    } catch (e) {
      console.log(`Failed to create ui segment of ${sliceName} slice`, e);
    }
  };

  const createComponents = async () => {
    const componentName = firstLetterUppercase(sliceName);

    try {
      await fs.mkdir(modelResolvePath(componentName));
      await fs.writeFile(
        modelResolvePath(componentName, `${componentName}.tsx`),
        componentTemplate(sliceName)
      );
      await fs.writeFile(
        modelResolvePath(componentName, `${componentName}.stories.tsx`),
        storiesTemplate(layer, sliceName)
      );
      await fs.writeFile(
        modelResolvePath(componentName, `${componentName}.module.scss`),
        styleTemplate(sliceName)
      );
    } catch (e) {
      console.log(`Failed to create component of ${sliceName} slice!`, e);
    }
  };

  await createUiStructure();
  await createComponents();
};
