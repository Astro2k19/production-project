import { type RuleSetRule, type Configuration } from 'webpack'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

export const buildStorybookConfig = async (config: Configuration): Promise<Configuration> => {
  if (config?.resolve?.plugins != null) {
    config.resolve.plugins = [
      ...config.resolve.plugins,
      new TsconfigPathsPlugin({

        extensions: config.resolve.extensions
      })
    ]
  }

  if ((config?.module?.rules) != null) {
    config.module.rules = [
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
  }

  return config
}
