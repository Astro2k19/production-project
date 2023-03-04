import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import ProfilePage from './Profile'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'pages/Profile',
  component: ProfilePage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfilePage>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />

export const Profile = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Profile.args = {}
Profile.decorators = [StoreDecorator({})]
