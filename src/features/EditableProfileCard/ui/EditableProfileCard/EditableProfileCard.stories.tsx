import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { ValidateProfileError } from '@/entities/Profile'

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'

import { EditableProfileCard } from './EditableProfileCard'

export default {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCard>

const Template: ComponentStory<typeof EditableProfileCard> = (...args) => (
    <EditableProfileCard
        id={'1'}
        {...args}
    />
)

export const Normal = Template.bind({})

const data = {
    first: 'Артем',
    lastname: 'Катрущенко',
    age: '12',
    currency: Currency.EUR,
    country: Country.USA,
    city: 'Poltava',
    username: 'wer',
    avatar: 'assets/avatar.jpg',
}

Normal.decorators = [
    StoreDecorator({
        profile: {
            readonly: true,
            data,
            formData: data,
        },
    }),
]
export const WithValidationErrors = Template.bind({})

WithValidationErrors.decorators = [
    StoreDecorator({
        profile: {
            readonly: false,
            data,
            formData: { ...data, age: '', username: '' },
            validateProfileErrors: [
                ValidateProfileError.INVALID_AGE,
                ValidateProfileError.INVALID_USERNAME,
            ],
        },
    }),
]
