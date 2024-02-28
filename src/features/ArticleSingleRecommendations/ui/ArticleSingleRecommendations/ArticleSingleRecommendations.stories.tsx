import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import withMock from 'storybook-addon-mock'
import { withRouter } from 'storybook-addon-react-router-v6'

import { article } from '@/entities/Article/testing'

import { StoreDecorator } from '@/shared/config/storybook'

import { ArticleSingleRecommendations } from './ArticleSingleRecommendations'

export default {
    title: 'features/ArticleSingleRecommendations',
    component: ArticleSingleRecommendations,
    decorators: [withMock, withRouter, StoreDecorator({})],
    parameters: {
        mockData: [
            {
                url: `${__API_URL__}/articles?_limit=3&_expand=user`,
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
} as ComponentMeta<typeof ArticleSingleRecommendations>

const Template: ComponentStory<typeof ArticleSingleRecommendations> = args => (
    <ArticleSingleRecommendations {...args} />
)

export const Normal = Template.bind({})
