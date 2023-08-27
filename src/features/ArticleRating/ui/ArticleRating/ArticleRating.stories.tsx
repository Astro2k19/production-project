import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import ArticleRating from './ArticleRating'
import withMock from 'storybook-addon-mock'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/ArticleRating',
  component: ArticleRating,
  decorators: [withMock, StoreDecorator({
    user: {
      authData: {
        id: '1'
      }
    }
  })],
  parameters: {
    mockData: [
      {
        url: `${__API_URL__}/article-rating?userid=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [
          {
            rate: 4
          }
        ]
      }
    ]
  }
} as ComponentMeta<typeof ArticleRating>

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />

export const Normal = Template.bind({})

Normal.args = {
  articleId: '1',
  withPortal: false
}
// export const withLoading = Template.bind({})
//
// withLoading.parameters = {
//   mockData: [
//     {
//       url: `${__API_URL__}/article-rating?userid=1&articleId=1`,
//       method: 'GET',
//       status: 200,
//       response: [
//         {
//           rate: 4
//         }
//       ],
//       delay: 2000
//     }
//   ]
// }
