import { type BuildOptions } from './types/config'
import type { Configuration as ConfigWebpackDevServer } from 'webpack-dev-server'

export const buildDevServer = (options: BuildOptions): ConfigWebpackDevServer => {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    // "hot: true" automatically applies HMR plugin, you don't have to add it manually to your webpack configuration.
    hot: true
  }
}
