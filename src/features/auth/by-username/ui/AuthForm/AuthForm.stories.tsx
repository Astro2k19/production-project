import React from 'react'
import { type ComponentMeta, type ComponentStory } from '@storybook/react'
import AuthForm from './AuthForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'features/AuthForm',
  component: AuthForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AuthForm>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AuthForm> = (args) => <AuthForm {...args} />

export const AuthFormComponent = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AuthFormComponent.args = {}
AuthFormComponent.decorators = [StoreDecorator({
  loginForm: {
    username: 'test',
    password: '123456789'
  }
})]
export const Loading = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Loading.args = {}
Loading.decorators = [StoreDecorator({
  loginForm: {
    isLoading: true
  }
})]

export const Error = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {}
Error.decorators = [StoreDecorator({
  loginForm: {
    error: 'asdfasdfasdfasdf'
  }
})]
