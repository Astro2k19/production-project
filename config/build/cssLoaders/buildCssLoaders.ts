import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions, type BuildPaths } from '../types/config'

export const buildCssLoaders = (isDev: boolean, paths: BuildPaths) => {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      // "style-loader",
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64]',
            auto: (resourcePath: string) => resourcePath.includes('.module.'),
            exportLocalsConvention: 'camelCase'
          }
        }
      },
      // Compiles Sass to CSS
      {
        loader: 'sass-loader',
        options: {
          sassOptions: {
            includePaths: [paths.src]
          }
        }
      }
    ]
  }
}
