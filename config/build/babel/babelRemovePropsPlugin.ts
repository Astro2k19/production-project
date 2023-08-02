import { type PluginItem } from '@babel/core'

export default function (): PluginItem {
  return {
    visitor: {
      Program (path, state) {
        // const forbidden: string[] | undefined = state.opts.props
        const forbidden: string[] | undefined = ['data-testid']

        console.log(state)

        path.traverse({
          JSXIdentifier (current) {
            const nodeName = current.node.name

            if (forbidden?.includes(nodeName)) {
              current.parentPath.remove()
            }
          }
        })
      }
    }
  }
}
