import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import img from '@/shared/assets/images/tests/avatar.jpg'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfileCard>

const data = {
  id: 1,
  first: 'Артем',
  lastname: 'Катрущенко',
  age: '12',
  currency: Currency.EUR,
  country: Country.USA,
  city: 'Poltava',
  username: 'wer',
  avatar: img
}

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})

Primary.args = {
  data
}

export const Loading = Template.bind({})

Loading.args = {
  isLoading: true
}

export const Readonly = Template.bind({})

Readonly.args = {
  readonly: true,
  data
}

export const Error = Template.bind({})

Error.args = {
  error: {
    code: '500',
    message: 'SERVER_ERROR'
  }
}
