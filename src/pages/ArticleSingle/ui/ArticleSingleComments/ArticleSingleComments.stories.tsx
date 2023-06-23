import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticleSingleComments } from './ArticleSingleComments'

export default {
  title: 'shared/ArticleSingleComments',
  component: ArticleSingleComments,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleSingleComments>

const Template: ComponentStory<typeof ArticleSingleComments> = (args) => <ArticleSingleComments {...args} />

export const Normal = Template.bind({})
