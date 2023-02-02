import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export const buildLoaders = ({isDev}: BuildOptions): webpack.RuleSetRule[] => {

    const scssModules = {

    }

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            // "style-loader",
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        localIdentName: isDev ?
                            '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64]',
                        auto: (resourcePath: string) => resourcePath.includes('.module.'),
                    }
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        tsLoader,
        scssLoader
    ]
}