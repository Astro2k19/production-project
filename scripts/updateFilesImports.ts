import { Project } from 'ts-morph'

const project = new Project()

project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.tsx'])

const sourceFiles = project.getSourceFiles()

const layers = ['app', 'entities', 'features', 'pages', 'shared', 'widgets']

const isAbsoluteImport = (path: string) => layers.some(layer => path.startsWith(layer))

sourceFiles.forEach(sourceFile => {
  const imports = sourceFile.getImportDeclarations()

  imports.forEach(importDeclaration => {
    const importPath = importDeclaration.getModuleSpecifierValue()
    if (isAbsoluteImport(importPath)) {
      importDeclaration.setModuleSpecifier(`@/${importPath}`)
    }
  })
})

project.save()
