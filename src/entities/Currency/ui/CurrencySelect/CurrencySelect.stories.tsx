import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import { CurrencySelect as Select } from './CurrencySelect'
import { Currency } from '../../model/const/currencyConts'

export default {
  title: 'shared/CurrencySelect',
  component: Select,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const CurrencySelect = Template.bind({})

CurrencySelect.args = {
  value: Currency.UAH
}
