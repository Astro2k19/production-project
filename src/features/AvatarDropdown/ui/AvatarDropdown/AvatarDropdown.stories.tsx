import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import avatar from 'src/shared/assets/images/tests/avatar.jpg'

import { AvatarDropdown } from './AvatarDropdown'

import { UserRoles } from '@/entities/User'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AvatarDropdown>

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />
console.log(avatar)
export const User = Template.bind({})
User.args = {
  authDate: {
    id: '1',
    username: 'Astro',
    avatar
  }
}
User.decorators = [
  StoreDecorator({
    user: {
      authData: {
        roles: [UserRoles.USER]
      }
    }
  })
]

export const Admin = Template.bind({})
Admin.args = {
  authDate: {
    id: '1',
    username: 'Astro',
    avatar
  }
}

Admin.decorators = [
  StoreDecorator({
    user: {
      authData: {
        roles: [UserRoles.ADMIN]
      }
    }
  })
]
