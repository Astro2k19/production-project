import path from 'path'
import { Project } from 'ts-morph'

import firstLetterUppercase from '../createSlice/firstLetterUppercase'

const project = new Project()

// Add your source files. Assuming you have a 'tsconfig.json' that defines your project.
project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.tsx'])

const sliceSegments = [
	'types',
	'ui',
	'services',
	'selectors',
	'middlewares',
	'const',
	'slice',
]

interface ExportNode {
	exportName: string
	exportSpecifierValue: string
}

const createReadmeForPublicApi = (layer: string) => {
	const directoryPath = path.resolve(__dirname, '..', '..', 'src', layer)

	const slicesDirectory = project.getDirectory(directoryPath)
	const slices = slicesDirectory?.getDirectories()

	slices?.forEach(directory => {
		const directoryName = directory.getBaseName()
		const publicApi = directory.getSourceFile('index.ts')
		const groupedSliceSegments: Record<string, ExportNode[]> = {}
		let readmeContent = ''

		if (publicApi) {
			const exportDeclarations = publicApi.getExportDeclarations()
			readmeContent += `## ${firstLetterUppercase(
				layer,
			)} ${directoryName}\n\nDescription: ...\n\n#### Public api\n\n`

			exportDeclarations?.forEach(exportDeclaration => {
				const exportSpecifier = exportDeclaration.getModuleSpecifier()

				if (exportSpecifier) {
					const exportSpecifierValue =
						exportSpecifier.getLiteralValue()
					const segments = exportSpecifierValue.split('/')
					const exportName = segments[segments.length - 1]

					sliceSegments.forEach(segment => {
						if (exportSpecifierValue.includes(segment)) {
							const exportNode = {
								exportName,
								exportSpecifierValue,
							}

							if (groupedSliceSegments[segment]) {
								groupedSliceSegments[segment]?.push(exportNode)
							} else {
								groupedSliceSegments[segment] = [exportNode]
							}
						}
					})
				}
			})
			const sortedGroupedSliceSegments: Record<string, ExportNode[]> =
				Object.keys(groupedSliceSegments)
					.sort()
					.reduce(
						(obj, key) => ({
							...obj,
							[key]: groupedSliceSegments[key],
						}),
						{},
					)

			Object.entries(sortedGroupedSliceSegments).forEach(
				([key, exportNodes]) => {
					readmeContent += `- ${key}\n\n`
					exportNodes.forEach(node => {
						readmeContent += `\`${node.exportName}\` - ...\n\n`
					})
				},
			)

			directory.createSourceFile('README.md', readmeContent, {
				overwrite: true,
			})
		}
	})
}

createReadmeForPublicApi('entities')
createReadmeForPublicApi('features')

project.save()
