import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ArticleSingleRecommendations } from 'src/features/ArticleSingleRecommendations'

import { ArticleSingleComments } from '../ArticleSingleComments/ArticleSingleComments'
import { ArticleSingleHeader } from '../ArticleSingleHeader/ArticleSingleHeader'

import { ArticleDetails, getArticleDetailsError, getArticleErrorMessage } from '@/entities/Article'
import { ArticleRating } from '@/features/ArticleRating'
import { classNames } from '@/shared/lib'
import { VStack } from '@/shared/ui/Stack'
import { Text, TextAligns, TextVariants } from '@/shared/ui/Text'
import { Page } from '@/widgets/Page'

interface ArticleSingleProps {
  className?: string
}

const ArticleSinglePage: FC<ArticleSingleProps> = ({ className }) => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()

  const articleDetailsError = useSelector(getArticleDetailsError)

  if (!id) {
    return <Text text={t('NO_ARTICLE')} />
  }

  if (articleDetailsError) {
    return (
        <Page className={classNames([className])}>
            <Text
               title={getArticleErrorMessage(articleDetailsError)}
               variant={TextVariants.ERROR}
               align={TextAligns.CENTER}
           />
        </Page>
    )
  }

  return (
      <Page className={classNames([className])}>
          <VStack gap={'32'} >
              <ArticleSingleHeader />
              <ArticleDetails id={id} />
              <ArticleSingleRecommendations />
              <ArticleRating articleId={id} />
              <ArticleSingleComments id={id} />
          </VStack>
      </Page>
  )
}

export default memo(ArticleSinglePage)
