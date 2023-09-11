import path from 'path'

import { Project } from 'ts-morph'

const project = new Project()

// Add your source files. Assuming you have a 'tsconfig.json' that defines your project.
project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.tsx'])

const sliceSegments = ['types', 'ui', 'services', 'selectors', 'middlewares', 'const', 'conts', 'slice']

interface ExportNode {
  exportName: string
  exportSpecifierValue: string

}

const createReadmeForPublicApi = (layer: string) => {
  const directoryPath = path.resolve(__dirname, '..', '..', 'src', layer)
  const groupedSliceSegments: Record<string, ExportNode[]> = {}

  const slicesDirectory = project.getDirectory(directoryPath)
  const slices = slicesDirectory?.getDirectories()

  slices?.forEach(directory => {
    const indexFilePath = `${directory.getPath()}/index.ts`
    const readmeFilePath = `${directory.getPath()}/README.md`
    const publicApi = project.getSourceFile(indexFilePath)

    if (publicApi) {
      const exportDeclarations = publicApi.getExportDeclarations()

      exportDeclarations?.forEach(exportDeclaration => {
        const exportSpecifier = exportDeclaration.getModuleSpecifier()

        if (exportSpecifier) {
          const exportSpecifierValue = exportSpecifier.getLiteralValue()
          const segments = exportSpecifierValue.split('/')
          const exportName = segments[segments.length - 1]
          console.log(exportSpecifierValue, 'exportSpecifierValue')
          // console.log(`Exported: ${exportName} from ${exportSpecifierValue}`)
          // You can use exportName and exportSpecifierValue to generate your README content.

          sliceSegments.forEach(createClipboardItem => {
            if (exportSpecifierValue.includes(createClipboardItem)) {
              const exportNode = {
                exportName,
                exportSpecifierValue
              }

              if (groupedSliceSegments[createClipboardItem]) {
                groupedSliceSegments[createClipboardItem]?.push(exportNode)
              } else {
                groupedSliceSegments[createClipboardItem] = [exportNode]
              }
            }
          })
        }
      })
    }
  })

  console.log(groupedSliceSegments)
}

createReadmeForPublicApi('entities')

// Save the project if needed.
// project.save();
