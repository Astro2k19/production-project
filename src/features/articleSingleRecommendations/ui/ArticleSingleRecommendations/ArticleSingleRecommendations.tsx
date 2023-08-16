import { memo } from 'react'
import { classNames } from '@/shared/lib'
import { Text } from '@/shared/ui'
import { ArticlesList } from '@/entities/Article'
import { useTranslation } from 'react-i18next'
import { useGetArticleRecommendations } from '../../api/fetchArticleSingleRecommendations'

interface ArticleSingleRecommendationsProps {
  className?: string
}

export const ArticleSingleRecommendations = memo(({ className }: ArticleSingleRecommendationsProps) => {
  const { t } = useTranslation()
  const { data: articles = [], isLoading, error } = useGetArticleRecommendations(undefined)

  console.log(error, 'error')

  return (
      <div className={classNames([className])}>
          <Text title={t('Recommendations')}/>
          <ArticlesList
                articles={articles}
                isLoading={isLoading}
                target={'_blank'}
            />
      </div>
  )
})
