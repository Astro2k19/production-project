import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import ProfilePage from './Profile'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import img from '@/shared/assets/images/tests/avatar.jpg'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

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

Profile.parameters = {
  reactRouter: {
    routePath: '/profile/:id',
    routeParams: { id: '1' }
  }
}

Profile.decorators = [StoreDecorator({
  profile: {
    data,
    formData: data
  }
})]
