export type BuildMode = 'none' | 'development' | 'production'

export interface BuildPaths {
  entry: string
  output: string
  html: string
  src: string
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  analyze: boolean
  port: number
}

export interface BuildEnv {
  analyze: boolean
  mode: BuildMode
  port: number
}
