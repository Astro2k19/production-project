import React, { type FC, memo } from 'react'
import { Page } from '@/widgets/Page'
import cls from './Articles.module.scss'
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList'

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
