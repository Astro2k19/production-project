export type BuildMode = 'none' | 'development' | 'production'

export interface BuildPaths {
  entry: string
  output: string
  html: string
  src: string
  locales: string
  buildLocales: string
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  analyze: boolean
  port: number
  apiUrl: string
  project: 'frontend' | 'storybook' | 'jest'
}

export interface BuildEnv {
  analyze: boolean
  mode: BuildMode
  port: number
  apiUrl: string
}
