const layers = ['app', 'entities', 'features', 'pages', 'shared', 'widgets']

export const isAbsoluteImport = (path: string) =>
    layers.some(layer => path.startsWith(layer))
