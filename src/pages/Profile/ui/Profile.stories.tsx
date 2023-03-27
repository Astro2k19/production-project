import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import ProfilePage from './Profile'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import img from 'shared/assets/images/tests/avatar.jpg'

export default {
  title: 'pages/Profile',
  component: ProfilePage,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfilePage>

const data = {
  first: 'Артем',
  lastname: 'Катрущенко',
  age: '12',
  currency: Currency.EUR,
  country: Country.USA,
  city: 'Poltava',
  username: 'Astro2k19',
  avatar: img
}
const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />

export const Profile = Template.bind({})

Profile.decorators = [StoreDecorator({
  profile: {
    data,
    formData: data
  }
})]
