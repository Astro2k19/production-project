import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import ProfilePage from './Profile'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import img from 'shared/assets/images/tests/avatar.jpg'

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

Primary.decorators = [StoreDecorator({
  profile: {
    data,
    formData: data
  }
})]

export const WithLoading = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithLoading.decorators = [StoreDecorator({
  profile: {
    isLoading: true
  }
})]

export const Readonly = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Readonly.decorators = [StoreDecorator({
  profile: {
    readonly: true,
    data,
    formData: data
  }
})]

export const WithError = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithError.decorators = [StoreDecorator({
  profile: {
    error: 'error'
  }
})]
