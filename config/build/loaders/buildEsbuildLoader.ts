import {  ExtendedBuildOptions } from "../types/config";


export const buildEsbuildLoader = ({ isTSX }: ExtendedBuildOptions) => ({
  test: isTSX ? /(jsx|tsx)$/ : /(js|ts)$/,
  loader: "esbuild-loader",
  options: {
    // JavaScript version to compile to
    target: "es2015"
  }
});