import webpack, { type Configuration } from 'webpack'
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

  return config
}
