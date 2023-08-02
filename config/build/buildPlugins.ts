import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { type BuildOptions } from './types/config'
import type { WebpackPluginInstance } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import CopyPlugin from 'copy-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import CircularDependencyPlugin from 'circular-dependency-plugin'

export const buildPlugins = ({ isDev, paths, analyze, apiUrl, project }: BuildOptions): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({ template: paths.html }),
    new webpack.ProgressPlugin(),
    // This plugin extracts CSS into separate files
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[name].[contenthash].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API_URL__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project)
    }),
    // refresh react components without reloading
    ...(isDev
      ? [new ReactRefreshWebpackPlugin({
          overlay: false
        })]
      : []),
    ...(analyze ? [new BundleAnalyzerPlugin()] : []),
    new CopyPlugin({
      patterns: [
        { from: paths.locales, to: paths.buildLocales }
      ]
    }),
    ...(isDev
      ? [new ForkTsCheckerWebpackPlugin({
          typescript: {
            diagnosticOptions: {
              semantic: true,
              syntactic: true
            }
          }
        })]
      : []),
    ...(isDev
      ? [new CircularDependencyPlugin({
          exclude: /node_modules/
        })]
      : [])
  ]
}

// TODO: fix circular dependencies, don't forget about Dependency cruiser
