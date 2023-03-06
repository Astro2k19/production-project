import webpack, { type RuleSetRule, type Configuration } from 'webpack'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

export const buildStorybookConfig = async (config: Configuration): Promise<Configuration> => {
  console.log('config.resolve.plugins', config?.resolve?.plugins)
  if (config?.resolve !== undefined) {
    config.resolve.plugins = [
      ...(config.resolve.plugins ?? []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions
      })
    ]
  }

  config?.plugins?.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API_URL__: JSON.stringify(true)
    })
  )

  if ((config?.module) !== undefined) {
    config.module.rules = [
      ...(config.module.rules?.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) { // eslint-disable-line
        // Silence the Storybook loaders for SVG files
          return { ...rule, exclude: /\.svg$/i }
        }

        return rule
      }) ?? []),
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      }
    ]
  }

  return config
}
