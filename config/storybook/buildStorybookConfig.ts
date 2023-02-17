import { type RuleSetRule, type Configuration } from 'webpack'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

export const buildStorybookConfig = async (config: Configuration): Promise<Configuration> => {
  // if (config?.resolve?.plugins != null) {
  // @ts-expect-error
  config.resolve.plugins = [
    // @ts-expect-error
    ...config.resolve.plugins,
    new TsconfigPathsPlugin({
      // @ts-expect-error
      extensions: config.resolve.extensions
    })
  ]
  // }
  // @ts-expect-error
  // if ((config?.module?.rules) != null) {
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
  // }

  return config
}
