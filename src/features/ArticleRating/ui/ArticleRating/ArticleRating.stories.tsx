import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import withMock from 'storybook-addon-mock'

import { mockArticleRatingResponse } from '@/entities/Rating/testing'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

import ArticleRating from './ArticleRating'

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    decorators: [
        withMock,
        StoreDecorator({
            user: {
                authData: {
                    id: '2',
                },
            },
        }),
    ],
    parameters: {
        mockData: [mockArticleRatingResponse],
    },
    args: {
        articleId: '3',
        withPortal: false,
    },
} as ComponentMeta<typeof ArticleRating>

const Template: ComponentStory<typeof ArticleRating> = args => (
    <ArticleRating {...args} />
)

export const Normal = Template.bind({})

export const withLoading = Template.bind({})

withLoading.parameters = {
    mockData: [{ ...mockArticleRatingResponse, delay: 2000 }],
    loki: { skip: true },
}
