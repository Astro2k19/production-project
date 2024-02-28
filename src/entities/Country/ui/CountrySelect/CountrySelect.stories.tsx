import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import { getThemeSettings } from '@/shared/config/storybook'

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

export const CountrySelectRedesigned = Template.bind({})
CountrySelectRedesigned.story = {
    parameters: {
        themes: getThemeSettings(true),
    },
}

CountrySelectRedesigned.args = {
    value: Country.UKRAINE,
}
