import React, { type FC, memo } from 'react'

import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList'

import { Page } from '@/widgets/Page'

import cls from './Articles.module.scss'

interface ArticlesProps {
  className?: string
}

const ArticlesPage: FC<ArticlesProps> = ({ className }) => {
  return (
      <Page className={cls.articlesPage}>
          <ArticlesInfiniteList />
      </Page>
  )
}

export default memo(ArticlesPage)
