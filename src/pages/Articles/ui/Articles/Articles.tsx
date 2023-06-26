import React, { type FC, memo } from 'react'
import { Page } from 'widgets/Page/Page'
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList'

interface ArticlesProps {
  className?: string
}

const ArticlesPage: FC<ArticlesProps> = ({ className }) => {
  return (
      <Page>
          <ArticlesInfiniteList />
      </Page>
  )
}

export default memo(ArticlesPage)
