import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import React from 'react'

import { StoreDecorator } from '@/shared/config/storybook'

import { AuthFormError } from '../../model/const/authConst'
import AuthForm from './AuthForm'

export default {
    title: 'features/AuthForm',
    component: AuthForm,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AuthForm>

const Template: ComponentStory<typeof AuthForm> = args => <AuthForm {...args} />

export const AuthFormComponent = Template.bind({})

AuthFormComponent.args = {}
AuthFormComponent.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'test',
            password: '123456789',
        },
    }),
]
export const Loading = Template.bind({})

Loading.args = {}
Loading.decorators = [
    StoreDecorator({
        loginForm: {
            isLoading: true,
        },
    }),
]

export const Error = Template.bind({})

Error.args = {}
Error.decorators = [
    StoreDecorator({
        loginForm: {
            error: {
                code: '500',
                message: AuthFormError.SERVER_ERROR,
            },
        },
    }),
]
