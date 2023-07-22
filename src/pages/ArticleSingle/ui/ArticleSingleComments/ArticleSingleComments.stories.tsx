import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ArticleSingleComments } from './ArticleSingleComments'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import avatar from 'shared/assets/images/tests/avatar.jpg'
import { article } from 'entities/Article'

export default {
  title: 'pages/ArticleSingle/ArticleSingleComments',
  component: ArticleSingleComments,
  parameters: {
    mockData: [
      {
        url: `${__API_URL__}/articles?_limit=4`,
        method: 'GET',
        status: 200,
        response: [
          { ...article, id: 1 },
          { ...article, id: 2 },
          { ...article, id: 3 }
        ]
      }
    ]
  }
} as ComponentMeta<typeof ArticleSingleComments>

const Template: ComponentStory<typeof ArticleSingleComments> = (args) => <ArticleSingleComments {...args} />

export const Normal = Template.bind({})
Normal.decorators = [
  StoreDecorator({
    articleSingleComments: {
      ids: [1, 2, 3],
      entities: {
        1: {
          user: {
            username: 'User',
            avatar
          },
          id: 1,
          text: 'Comment 1'
        },
        2: {
          user: {
            username: 'User',
            avatar
          },
          id: 2,
          text: 'Comment 2'
        },
        3: {
          user: {
            username: 'User',
            avatar
          },
          id: 3,
          text: 'Comment 3'
        }
      }
    }
  })
]

export const withLoading = Template.bind({})

withLoading.decorators = [
  StoreDecorator({
    articleSingleComments: {
      isLoading: true,
      ids: [],
      entities: {}
    }
  })
]
