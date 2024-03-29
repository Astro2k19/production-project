import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'
import withMock from 'storybook-addon-mock'
import { withRouter } from 'storybook-addon-react-router-v6'

import { StoreDecorator } from '@/shared/config/storybook'

import { article, mockArticleResponse } from '../../mocks/data.mock'
import { ArticleDetails } from './ArticleDetails'

export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,

    decorators: [
        withMock,
        withRouter,
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                },
            },
        }),
    ],
    parameters: {
        mockData: [{ ...mockArticleResponse, response: article }],
    },
    args: {
        id: '1',
    },
} as ComponentMeta<typeof ArticleDetails>

const Template: ComponentStory<typeof ArticleDetails> = () => (
    <ArticleDetails id="1" />
)

export const Primary = Template.bind({})

export const withLoading = Template.bind({})

withLoading.args = {}

withLoading.parameters = {
    mockData: [{ ...mockArticleResponse, response: article, delay: 2000 }],
}
