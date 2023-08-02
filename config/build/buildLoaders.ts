import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import { buildBabelLoader } from './loaders/buildBabelLoader'
import { buildCssLoader } from './loaders/buildCssLoader'

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

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

  const scssLoader = buildCssLoader(options)

  const codeBabelLoader = buildBabelLoader({ ...options, isTSX: false })
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTSX: true })

  return [
    imagesLoader,
    fontsLoader,
    svgLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    scssLoader
  ]
}
