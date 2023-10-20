import path from 'path'
import { Project } from 'ts-morph'

import { isAbsoluteImport } from './helpers'

const project = new Project()

project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.tsx'])

const sharedUiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui')

const sharedUiDirectory = project.getDirectory(sharedUiPath)
const sourceFiles = project.getSourceFiles()

const sharedUiComponents = sharedUiDirectory?.getDirectories()
sharedUiComponents?.forEach(directory => {
	const indexFilePath = `${directory.getPath()}/index.ts`
	const componentName = directory.getBaseName()
	const publicApi = directory.getSourceFile(indexFilePath)

	if (!publicApi) {
		const content = `export * from './${componentName}'`
		directory.createSourceFile(indexFilePath, content, { overwrite: true })
	}
})

sourceFiles.forEach(sourceFile => {
	const imports = sourceFile.getImportDeclarations()

	imports.forEach(importDeclaration => {
		const importPath = importDeclaration.getModuleSpecifierValue()
		const importWithoutAlias = importPath.replace('@/', '')

		const segments = importWithoutAlias.split('/')
		const isSharedLayer = segments[0] === 'shared'
		const isUiSlice = segments[1] === 'ui'

		if (
			isAbsoluteImport(importWithoutAlias) &&
			isSharedLayer &&
			isUiSlice
		) {
			const newImportPath = segments.slice(0, 3).join('/')
			importDeclaration.setModuleSpecifier(newImportPath)
		}
	})
})

project.save()
