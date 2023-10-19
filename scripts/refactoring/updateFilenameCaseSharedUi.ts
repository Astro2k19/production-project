import path from 'path';

import { Project } from 'ts-morph';

const project = new Project();

project.addSourceFilesAtPaths(['src/**/*.ts']);

const sharedUiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUiDirectory = project.getDirectory(sharedUiPath);

const sharedUiComponents = sharedUiDirectory?.getDirectories();

sharedUiComponents?.forEach(oldDirectory => {
	const oldDirectoryName = oldDirectory.getBaseName();
	const newDirectoryName = `${oldDirectoryName[0].toUpperCase()}${oldDirectoryName.slice(
		1
	)}1`;

	if (oldDirectoryName !== newDirectoryName) {
		// const newDirectory = sharedUiDirectory!.createDirectory(newDirectoryName)
		console.log(
			oldDirectory.getSourceFiles(),
			'oldDirectory.getSourceFiles()'
		);

		// oldDirectory.getSourceFiles().forEach(file => {
		//   console.log(file.getBaseName(), 'file')
		//   const newFilePath = newDirectory.getPath()
		//   file.copyToDirectory(newFilePath)
		// })
		//
		// oldDirectory.delete()
	}
});

// Save changes synchronously
project.saveSync();

console.log('Directory name updates complete.');
