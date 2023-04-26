import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Page } from './Page'

export default {
  title: 'shared/Page',
  component: Page,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />

export const Normal = Template.bind({})