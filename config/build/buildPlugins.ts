import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildPaths} from "./types/config";
import type {WebpackPluginInstance} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = (paths: BuildPaths): WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({template: paths.html}),
        new webpack.ProgressPlugin(),
        //This plugin extracts CSS into separate files
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css',
            chunkFilename: 'css/[name].[contenthash].css'
        })
    ]
}