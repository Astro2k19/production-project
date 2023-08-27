import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { Page } from './Page'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'widgets/Page',
  component: Page
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />

export const Normal = Template.bind({})

Normal.decorators = [
  StoreDecorator({})
]
