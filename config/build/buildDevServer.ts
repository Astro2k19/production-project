import {BuildOptions} from "./types/config";
import type {Configuration as ConfigWebpackDevServer} from "webpack-dev-server";
import path from "path";

export const buildDevServer = (options: BuildOptions): ConfigWebpackDevServer => {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true
    }
}