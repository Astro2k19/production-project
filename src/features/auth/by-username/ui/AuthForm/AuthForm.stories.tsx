import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import AuthForm from './AuthForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { AuthFormError } from '../../model/types/loginSchema'

export default {
  title: 'features/AuthForm',
  component: AuthForm,

  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AuthForm>

const Template: ComponentStory<typeof AuthForm> = (args) => <AuthForm {...args} />

export const AuthFormComponent = Template.bind({})

AuthFormComponent.args = {}
AuthFormComponent.decorators = [StoreDecorator({
  loginForm: {
    username: 'test',
    password: '123456789'
  }
})]
export const Loading = Template.bind({})

Loading.args = {}
Loading.decorators = [StoreDecorator({
  loginForm: {
    isLoading: true
  }
})]

export const Error = Template.bind({})

Error.args = {}
Error.decorators = [StoreDecorator({
  loginForm: {
    error: {
      code: '500',
      message: AuthFormError.SERVER_ERROR
    }
  }
})]
