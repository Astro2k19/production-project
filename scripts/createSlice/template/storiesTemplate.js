const firstLetterUppercase = require("../firstLetterUppercase");

module.exports = (layer, sliceName) => {
  const componentName = firstLetterUppercase(sliceName);

  return `import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ${componentName} } from './${componentName}'

export default {
  title: '${layer}/${componentName}',
  component: ${componentName},
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ${componentName}>

const Template: ComponentStory<typeof ${componentName}> = (args) => <${componentName} {...args} />

export const Normal = Template.bind({})
`;
};
