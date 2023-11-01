import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'
import withMock from 'storybook-addon-mock'

import { article, mockArticleResponse } from '@/entities/Article/testing'
import { mockCommentResponse } from '@/entities/Comment/testing'
import { mockArticleRatingResponse } from '@/entities/Rating/testing'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

import ArticleSinglePage from './ArticleSingle'

export default {
    title: 'pages/ArticleSingle',
    component: ArticleSinglePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        withMock,
        StoreDecorator({
            user: {
                authData: {
                    id: '1',
                },
            },
        }),
    ],
    parameters: {
        reactRouter: {
            routePath: '/articles/:id',
            routeParams: { id: '1' },
        },
        mockData: [
            { ...mockArticleResponse, response: article },
            mockCommentResponse,
            mockArticleRatingResponse,
            {
                url: `${__API_URL__}/articles?_limit=4&_expand=user`,
                method: 'GET',
                status: 200,
                response: [
                    { ...article, id: 1 },
                    { ...article, id: 2 },
                    { ...article, id: 3 },
                ],
            },
        ],
    },
} as ComponentMeta<typeof ArticleSinglePage>

const Template: ComponentStory<typeof ArticleSinglePage> = () => (
    <ArticleSinglePage />
)

export const ArticleSingle = Template.bind({})

export const withLoading = Template.bind({})

withLoading.parameters = {
    mockData: [{ ...mockArticleResponse, response: article, delay: 2000 }],
    loki: { skip: true },
}
