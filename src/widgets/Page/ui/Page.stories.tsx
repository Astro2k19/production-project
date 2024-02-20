import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook'

import { Page } from './Page'

export default {
    title: 'widgets/Page',
    component: Page,
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = args => <Page {...args} />

export const Normal = Template.bind({})

Normal.decorators = [StoreDecorator({})]
