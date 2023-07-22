import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { EditableProfileCard } from './EditableProfileCard'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import img from 'shared/assets/images/tests/avatar.jpg'
import { ValidateProfileError } from '../model/const/editableProfileCardConst'

export default {
  title: 'features/EditableProfileCard',
  component: EditableProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof EditableProfileCard>

const Template: ComponentStory<typeof EditableProfileCard> = (...args) => <EditableProfileCard id={'1'} {...args} />

export const Primary = Template.bind({})

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
    readonly: true,
    data,
    formData: data
  }
})]
export const WithValidationErrors = Template.bind({})

WithValidationErrors.decorators = [StoreDecorator({
  profile: {
    readonly: false,
    data,
    formData: { ...data, age: '', username: '' },
    validateProfileErrors: [
      ValidateProfileError.INVALID_AGE,
      ValidateProfileError.INVALID_USERNAME
    ]
  }
})]
