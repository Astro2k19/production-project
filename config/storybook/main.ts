import { buildStorybookConfig } from './buildStorybookConfig'

export default {
  stories: [
    '../../src/**/*.stories.mdx',
    '../../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
    'storybook-addon-themes',
    'storybook-react-i18next',
    'storybook-addon-react-router-v6',
    'storybook-addon-mock/register'
  ],
  framework: '@storybook/react',
  docs: {
    autodocs: 'tag'
  },
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: buildStorybookConfig
}
