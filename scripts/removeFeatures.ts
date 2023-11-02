import { Node, Project, SyntaxKind } from 'ts-morph'

const featureArgName = process.argv[2]
const featureArgState = process.argv[3]

if (!featureArgName) {
    throw new Error('You must specify a feature name!')
}

if (!featureArgState) {
    throw new Error('You must specify a feature state (on, off)!')
}

const project = new Project()

project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/ArticleSingle.tsx'])

const sourceFiles = project.getSourceFiles()

const isToggleFeature = (node: Node) => {
    let isFeatureFlagFn = false
    node.forEachDescendant(childNode => {
        if (
            childNode.isKind(SyntaxKind.Identifier) &&
            childNode.getText() === 'toggleFeature'
        ) {
            isFeatureFlagFn = true
        }
    })

    return isFeatureFlagFn
}

sourceFiles.forEach(sourceFile => {
    sourceFile.forEachDescendant(childNode => {
        if (
            childNode.isKind(SyntaxKind.CallExpression) &&
            isToggleFeature(childNode)
        ) {
            const argument = childNode.getFirstChildByKind(
                SyntaxKind.ObjectLiteralExpression,
            )

            if (!argument) return

            const featureNameProperty = argument.getProperty('name')
            const offFnProperty = argument.getProperty('off')
            const onFnProperty = argument.getProperty('on')

            const onFn = onFnProperty?.getFirstChildByKind(
                SyntaxKind.ArrowFunction,
            )

            const offFn = offFnProperty?.getFirstChildByKind(
                SyntaxKind.ArrowFunction,
            )

            const featureName = featureNameProperty
                ?.getFirstChildByKind(SyntaxKind.StringLiteral)
                ?.getText()
                .slice(1, -1)

            if (featureName !== featureArgName) return

            if (featureArgState === 'on') {
                childNode.replaceWithText(onFn?.getBody().getText() ?? '')
            }

            if (featureArgState === 'off') {
                childNode.replaceWithText(offFn?.getBody().getText() ?? '')
            }
        }
    })
})

project.save()
