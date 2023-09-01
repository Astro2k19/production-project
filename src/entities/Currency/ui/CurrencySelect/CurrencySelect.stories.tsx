import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import { Currency } from '../../model/const/currencyConst'

import { CurrencySelect as Select } from './CurrencySelect'

export default {
  title: 'entities/CurrencySelect',
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
