import { type ComponentMeta, type ComponentStory } from '@storybook/react'

import { StoreDecorator } from '@/shared/config/storybook'

import AddCommentForm from './AddCommentForm'

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddCommentForm>

const Template: ComponentStory<typeof AddCommentForm> = args => (
    <AddCommentForm {...args} />
)

export const Normal = Template.bind({})
Normal.args = {
    onSendComment: () => {},
}

Normal.decorators = [StoreDecorator({})]
