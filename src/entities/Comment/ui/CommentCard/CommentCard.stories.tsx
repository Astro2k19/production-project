import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { CommentCard } from './CommentCard'
import avatar from '@/shared/assets/images/tests/avatar.jpg'

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

export const Normal = Template.bind({})

Normal.args = {
  comment: {
    text: 'comment 1',
    id: 1,
    user: {
      id: '1',
      avatar,
      username: 'Artem'
    }
  }
}

export const Loading = Template.bind({})

Loading.args = {
  isLoading: true
}
