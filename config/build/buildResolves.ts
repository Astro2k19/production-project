import type {ResolveOptions} from "webpack";

export const buildResolvers = (): ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js']
    }
}