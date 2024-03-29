import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'
import withMock from 'storybook-addon-mock'
import { withRouter } from 'storybook-addon-react-router-v6'

import { article, mockArticleResponse } from '@/entities/Article/testing'
import { mockCommentResponse } from '@/entities/Comment/testing'
import { mockArticleRatingResponse } from '@/entities/Rating/testing'

import { StoreDecorator } from '@/shared/config/storybook'
import { getRouteArticleSingle } from '@/shared/const/router'

import ArticleSinglePage from './ArticleSingle'

export default {
    title: 'pages/ArticleSingle',
    component: ArticleSinglePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
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
        reactRouter: {
            routePath: getRouteArticleSingle(':id'),
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
