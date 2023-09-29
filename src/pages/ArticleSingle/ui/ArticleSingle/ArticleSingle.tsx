import { type FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { ArticleSingleComments } from '../ArticleSingleComments/ArticleSingleComments'
import { ArticleSingleHeader } from '../ArticleSingleHeader/ArticleSingleHeader'

import { ArticleDetails, getArticleErrorMessage } from '@/entities/Article'
import { ArticleRating } from '@/features/ArticleRating'
import { ArticleSingleRecommendations } from '@/features/ArticleSingleRecommendations'
import { classNames } from '@/shared/lib'
import { VStack } from '@/shared/ui/Stack'
import { Text, TextAligns, TextVariants } from '@/shared/ui/Text'
import { Page } from '@/widgets/Page'
import {useFetchArticleById} from "@/entities/Article";

interface ArticleSingleProps {
  className?: string
}

const ArticleSinglePage: FC<ArticleSingleProps> = ({ className }) => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const {error} = useFetchArticleById(id as string)

  if (!id) {
    return <Text text={t('NO_ARTICLE')} />
  }

  if (error) {
    return (
        <Page className={classNames([className])}>
            <Text
               // title={getArticleErrorMessage(error)}
               title={'error'}
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
