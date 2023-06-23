import { type FC, memo } from 'react'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ArticleDetails, getArticleDetailsError, getArticleErrorMessage } from 'entities/Article'
import { Text, TextAligns, TextVariants } from 'shared/ui'
import { useSelector } from 'react-redux'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader'
import { Page } from 'widgets/Page/Page'
import { articleSinglePageReducer } from '../../model/slice'
import { ArticleSingleHeader } from '../ArticleSingleHeader/ArticleSingleHeader'
import { VStack } from 'shared/ui/stack'
import { ArticleSingleRecommendations } from 'features/articleSingleRecommendations'
import { ArticleSingleComments } from '../ArticleSingleComments/ArticleSingleComments'

interface ArticleSingleProps {
  className?: string
}

const reducers: ReducersList = {
  articleSinglePage: articleSinglePageReducer
}

const ArticleSinglePage: FC<ArticleSingleProps> = ({ className }) => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()

  const articleDetailsError = useSelector(getArticleDetailsError)

  if (!id) {
    return <Text text={t('NO_ARTICLE')} />
  }

  let content

  if (articleDetailsError) {
    content = (
        <Text
            title={getArticleErrorMessage(articleDetailsError)}
            variant={TextVariants.ERROR}
            align={TextAligns.CENTER}
        />
    )
  } else {
    content = (
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

  return (
      <DynamicModuleLoader reducers={reducers}>
          {content}
      </DynamicModuleLoader>
  )
}

export default memo(ArticleSinglePage)
