import webpack, { type RuleSetRule, type Configuration } from 'webpack'
import path from 'path'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import { buildCssLoaders } from '../build/cssLoaders/buildCssLoaders'
import { type BuildPaths } from '../build/types/config'

export const buildStorybookConfig = async (config: Configuration) => {
// @ts-expect-error
  config.resolve.plugins = [
    // @ts-expect-error
    ...((config.resolve.plugins != null) || []),
    new TsconfigPathsPlugin({
      // @ts-expect-error
      extensions: config.resolve.extensions
    })
  ]

  // @ts-expect-error
  config.module.rules = [
    // @ts-expect-error
    ...config.module.rules.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) { // eslint-disable-line
        // Silence the Storybook loaders for SVG files
        return { ...rule, exclude: /\.svg$/i }
      }

      return rule
    }),
    {
      test: /\.svg$/,
      use: ['@svgr/webpack']
    }
  ]

  return config
}
