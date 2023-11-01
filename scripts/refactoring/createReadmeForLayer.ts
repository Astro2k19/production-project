import path from 'path'
import { Project } from 'ts-morph'

const project = new Project()

project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.md'])

const sliceMap: Record<string, string> = {
    pages: 'Page',
    entities: 'Entity',
    features: 'Feature',
    widgets: 'Widget',
}

const createReadmeForLayer = (layer: string) => {
    const layerPath = path.resolve(__dirname, '..', '..', 'src', layer)
    const layerDirectory = project.getDirectory(layerPath)
    const slices = layerDirectory?.getDirectories()

    slices?.forEach(sliceDirectory => {
        const readmeFilePath = `${sliceDirectory.getPath()}/README.md`
        const isReadExist = sliceDirectory.getSourceFile(readmeFilePath)

        if (!isReadExist) {
            const sourceCode = `## ${
                sliceMap[layer]
            } ${sliceDirectory.getBaseName()} is for ...`
            const file = sliceDirectory.createSourceFile(
                readmeFilePath,
                sourceCode,
                {
                    overwrite: true,
                },
            )
            file.save()
        }
    })
}

createReadmeForLayer('entities')
createReadmeForLayer('features')

project.save()
