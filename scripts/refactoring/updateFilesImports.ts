import { Project } from 'ts-morph'

import { isAbsoluteImport } from './helpers'

const project = new Project()

project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.tsx'])

const sourceFiles = project.getSourceFiles()

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
