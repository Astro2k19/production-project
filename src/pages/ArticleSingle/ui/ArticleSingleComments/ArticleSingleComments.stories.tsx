import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import withMock from 'storybook-addon-mock'
import { withRouter } from 'storybook-addon-react-router-v6'

import { mockCommentResponse } from '@/entities/Comment/testing'

import { StoreDecorator } from '@/shared/config/storybook'

import { ArticleSingleComments } from './ArticleSingleComments'

export default {
    title: 'pages/ArticleSingle/ArticleSingleComments',
    component: ArticleSingleComments,
    decorators: [withMock, withRouter, StoreDecorator({})],
    args: {
        id: '1',
    },
    parameters: {
        mockData: [mockCommentResponse],
    },
} as ComponentMeta<typeof ArticleSingleComments>

const Template: ComponentStory<typeof ArticleSingleComments> = args => (
    <ArticleSingleComments {...args} />
)

export const Normal = Template.bind({})

export const withLoading = Template.bind({})

withLoading.parameters = {
    mockData: [{ ...mockCommentResponse, delay: 2000 }],
}
