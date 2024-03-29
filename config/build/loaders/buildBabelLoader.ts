import babelRemovePropsPlugin from '../babel/babelRemovePropsPlugin'
import { type BuildOptions } from '../types/config'

interface BuildBabelLoaderOptions extends BuildOptions {
  isTSX: boolean
}

export const buildBabelLoader = ({ isTSX, isDev }: BuildBabelLoaderOptions) => ({
  test: isTSX ? /(jsx|tsx)$/ : /(js|ts)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env', '@babel/preset-typescript'],
      cacheDirectory: true,
      plugins: [
        // ['i18next-extract',
        //   {
        //     locales: ['en', 'ua'],
        //     defaultNS: 'translation',
        //     keySeparator: '.',
        //     keyAsDefaultValue: true,
        //     outputPath: 'public/locales/{{locale}}/{{ns}}.json'
        //   }],
        [
          '@babel/plugin-transform-typescript',
          {
            isTSX
          }
        ],
        '@babel/plugin-transform-runtime',
        ...(isTSX && !isDev
          ? [babelRemovePropsPlugin]
          : []),
        ...(isDev ? ['react-refresh/babel'] : [])
      ]
    }
  }
})
