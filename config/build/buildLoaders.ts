import type webpack from 'webpack'
import { buildCssLoader } from './loaders/buildCssLoader'
import { type BuildOptions } from './types/config'
import { buildEsbuildLoader } from "./loaders/buildEsbuildLoader";

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = options

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

  const codeEsbuildLoader = buildEsbuildLoader({ ...options, isTSX: false })
  const tsxCodeEsbuildLoader = buildEsbuildLoader({ ...options, isTSX: true })

  return [
    imagesLoader,
    fontsLoader,
    svgLoader,
    codeEsbuildLoader,
    tsxCodeEsbuildLoader,
    scssLoader
  ]
}
