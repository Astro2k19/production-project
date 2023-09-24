import MiniCssExtractPlugin from 'mini-css-extract-plugin'

import { type BuildOptions } from '../types/config'

export const buildCssLoader = ({ isDev, paths }: BuildOptions) => ({
  test: /\.s[ac]ss$/i,
  exclude: /node_modules/,
  use: [
    // Creates `style` nodes from JS strings
    // "style-Loader",
    isDev ? 'style-Loader' : MiniCssExtractPlugin.loader,
    // Translates CSS into CommonJS
    {
      loader: 'css-Loader',
      options: {
        modules: {
          localIdentName: isDev
            ? '[path][name]__[local]--[hash:base64:5]'
            : '[hash:base64]',
          auto: (resourcePath: string) => resourcePath.includes('.module.')
          // exportLocalsConvention: 'camelCase'
        }
      }
    },
    // Compiles Sass to CSS
    {
      loader: 'sass-Loader',
      options: {
        sassOptions: {
          includePaths: [paths.src]
        }
      }
    }
  ]
})
