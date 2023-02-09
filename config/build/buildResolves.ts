import type { ResolveOptions } from 'webpack'
import { type BuildOptions } from './types/config'

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    // Tell webpack what directories should be searched when resolving modules.
    // If you want to add a directory to search in that takes precedence over node_modules/:
    modules: [options.paths.src, 'node_modules'],
    // The filename to be used while resolving directories. (we use re-export in index.ts as public api)
    mainFiles: ['index'],
    preferAbsolute: true,
    alias: {}
  }
}
