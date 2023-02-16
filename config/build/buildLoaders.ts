import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev, paths } = options

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const babelLoader = {
    test: /\.m?(js?x|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-typescript'],
        plugins: [
          ['i18next-extract',
            {
              locales: ['en', 'ua'],
              keyAsDefaultValue: false,
              saveMissing: true,
              outputPath: 'public/locales/{{locale}}/{{ns}}.json'
            }]
        ]
      }
    }
  }

  const imagesLoader = {
    test: /\.(png|jpg?e|gif)$/i,
    type: 'asset/resource'
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
      filename: isDev ? 'fonts/[name][ext][query]' : 'fonts/[hash:5][ext][query]'
    }
  }

  const scssLoader = {
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

  // setus ts-loader with React Refresh Webpack Plugin for updating react components without refresh
  const tsLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
          }),
          transpileOnly: isDev
        }
      }
    ]
  }

  return [
    imagesLoader,
    fontsLoader,
    svgLoader,
    // babelLoader,
    tsLoader,
    scssLoader
  ]
}
