import dotenv from 'dotenv'
import path from 'path'
import type webpack from 'webpack'

import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { type BuildEnv, type BuildPaths } from './config/build/types/config'

export default (env: BuildEnv): webpack.Configuration => {
    const mode = env?.mode ?? 'development'
    const isDev = mode === 'development'
    const PORT = env?.port ?? 3000
    const analyze = env?.analyze ?? false
    const apiUrl = env?.apiUrl
    const project = 'frontend'
    const envPath = path.resolve(__dirname, `.env.${mode}`)
    dotenv.config({ path: envPath })

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales'),
    }

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        analyze,
        port: PORT,
        apiUrl,
        project,
    })
}
