import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import { Country } from '../../model/const/countryConts'
import { CountrySelect as Select } from './CountrySelect'

export default {
	title: 'entities/CountrySelect',
	component: Select,

	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = args => <Select {...args} />

export const CountrySelect = Template.bind({})

CountrySelect.args = {
	value: Country.UKRAINE,
}
