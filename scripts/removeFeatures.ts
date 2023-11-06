import {
    JsxAttribute,
    JsxSelfClosingElement,
    Node,
    Project,
    SyntaxKind,
} from 'ts-morph'

const featureArgName = process.argv[2]
const featureArgState = process.argv[3]

if (!featureArgName) {
    throw new Error('You must specify a feature name!')
}

if (!featureArgState) {
    throw new Error('You must specify a feature state (on, off)!')
}

const project = new Project()

project.addSourceFilesAtPaths(['src/**/*.ts', 'src/**/*.tsx'])

const sourceFiles = project.getSourceFiles()
const toggleFunctionName = 'toggleFeature'
const toggleComponentName = 'ToggleFeatures'

const isToggleFeatureFunction = (node: Node) => {
    let isFeatureFlagFn = false
    node.forEachDescendant(childNode => {
        if (
            childNode.isKind(SyntaxKind.Identifier) &&
            childNode.getText() === toggleFunctionName
        ) {
            isFeatureFlagFn = true
        }
    })

    return isFeatureFlagFn
}

const isToggleFeatureComponent = (node: JsxSelfClosingElement) =>
    node.getTagNameNode().getText() === toggleComponentName

const replaceFeatureFunction = (childNode: Node) => {
    const argument = childNode.getFirstChildByKind(
        SyntaxKind.ObjectLiteralExpression,
    )

    if (!argument) return

    const featureNameProperty = argument.getProperty('name')
    const offFnProperty = argument.getProperty('off')
    const onFnProperty = argument.getProperty('on')

    const onFn = onFnProperty?.getFirstChildByKind(SyntaxKind.ArrowFunction)

    const offFn = offFnProperty?.getFirstChildByKind(SyntaxKind.ArrowFunction)

    const featureName = featureNameProperty
        ?.getFirstChildByKind(SyntaxKind.StringLiteral)
        ?.getLiteralValue()

    if (featureName !== featureArgName) return

    if (featureArgState === 'on') {
        childNode.replaceWithText(onFn?.getBody().getText() ?? '')
    }

    if (featureArgState === 'off') {
        childNode.replaceWithText(offFn?.getBody().getText() ?? '')
    }
}

const getReplacedComponent = (attr?: JsxAttribute) => {
    const attrValue = attr
        ?.getFirstChildByKind(SyntaxKind.JsxExpression)
        ?.getExpression()
        ?.getText()

    if (attrValue?.startsWith('(')) {
        return attrValue.slice(1, -1)
    }

    return attrValue
}

const replaceFeatureComponent = (node: Node) => {
    const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute)

    const featureAttr = getNodeAttributeByName(attributes, 'feature')
    const offAttr = getNodeAttributeByName(attributes, 'off')
    const onAttr = getNodeAttributeByName(attributes, 'on')

    const featureValue = featureAttr
        ?.getFirstChildByKind(SyntaxKind.JsxExpression)
        ?.getFirstChildByKind(SyntaxKind.StringLiteral)
        ?.getLiteralValue()

    const offFnValue = getReplacedComponent(offAttr)

    const onFnValue = getReplacedComponent(onAttr)

    if (featureValue !== featureArgName) return

    if (featureArgState === 'on') {
        node.replaceWithText(onFnValue ?? '')
    }

    if (featureArgState === 'off') {
        node.replaceWithText(offFnValue ?? '')
    }
}

const getNodeAttributeByName = (attributes: JsxAttribute[], name: string) => {
    return attributes.find(attr => attr.getNameNode().getText() === name)
}
sourceFiles.forEach(sourceFile => {
    sourceFile.forEachDescendant(childNode => {
        if (
            childNode.isKind(SyntaxKind.CallExpression) &&
            isToggleFeatureFunction(childNode)
        ) {
            replaceFeatureFunction(childNode)
            return
        }

        if (
            childNode.isKind(SyntaxKind.JsxSelfClosingElement) &&
            isToggleFeatureComponent(childNode)
        ) {
            replaceFeatureComponent(childNode)
        }
    })
})

project.save()
