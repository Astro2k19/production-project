import { type FC, memo } from 'react'
import { classNames } from '@/shared/lib'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ArticleDetails, getArticleDetailsError, getArticleErrorMessage } from '@/entities/Article'
import { Text, TextAligns, TextVariants } from '@/shared/ui'
import { useSelector } from 'react-redux'
import { Page } from '@/widgets/Page/Page'
import { ArticleSingleHeader } from '../ArticleSingleHeader/ArticleSingleHeader'
import { VStack } from '@/shared/ui/stack'
import { ArticleSingleRecommendations } from '@/features/articleSingleRecommendations'
import { ArticleSingleComments } from '../ArticleSingleComments/ArticleSingleComments'

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
              <ArticleSingleComments id={id} />
          </VStack>
      </Page>
  )
}

export default memo(ArticleSinglePage)
