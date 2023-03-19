import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import img from 'shared/assets/images/tests/avatar.jpg'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ProfileCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args

const data = {
  first: 'Артем',
  lastname: 'Катрущенко',
  age: '12',
  currency: Currency.EUR,
  country: Country.USA,
  city: 'Poltava',
  username: 'wer',
  avatar: img
}

Primary.args = {
  data
}

export const WithLoading = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithLoading.args = {
  isLoading: true
}

export const WithError = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithError.args = {
  error: 'Error!'
}
