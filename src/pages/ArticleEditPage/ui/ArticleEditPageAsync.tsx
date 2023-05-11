import { lazy } from 'react'

export const ArticleEditPageAsync = lazy(async () => await new Promise((resolve) => {
  setTimeout(() => { // @ts-expect-error: TS2345
    resolve(import('./ArticleEditPage'))
  }, 1500)
}))
