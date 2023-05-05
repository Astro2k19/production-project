import { type FC, memo, useCallback } from 'react'
import cls from './ArticleSingle.module.scss'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ArticleDetails, getArticleDetailsError, getArticleErrorMessage, ArticlesList } from 'entities/Article'
import { Text, TextAligns, TextVariants } from 'shared/ui'
import { CommentsList } from 'entities/Comment'
import { useSelector } from 'react-redux'
import {
  articleSingleCommentsSelectors,
  getArticleSingleCommentsError,
  getArticleSingleCommentsIsLoading
} from '../../model/selectors/comments'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader'
import { useFetchData } from 'shared/lib/hooks/useFetchData'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchArticleCommentsById } from '../../model/services/fetchArticleCommentsById/fetchArticleCommentsById'
import { sendCommentForArticle } from '../../model/services/sendCommentForArticle/sendCommentForArticle'
import { AddCommentForm } from 'features/addCommentForm'
import { getArticleCommentsErrorMessage } from '../../lib/getArticleCommentsErrorMessage/getArticleCommentsErrorMessage'
import { Page } from 'widgets/Page/Page'
import {
  fetchArticleSingleRecommendations
} from '../../model/services/fetchArticleSingleRecommendations/fetchArticleSingleRecommendations'
import { articleSinglePageReducer } from '../../model/slice'
import {
  articleSingleRecommendationsSelectors,
  getArticleSingleRecommendationsIsLoading
} from '../../model/selectors/recommendations'

interface ArticleSingleProps {
  className?: string
}

const reducers: ReducersList = {
  articleSinglePage: articleSinglePageReducer
}

const ArticleSinglePage: FC<ArticleSingleProps> = ({ className }) => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const comments = useSelector(articleSingleCommentsSelectors.selectAll)
  const isLoading = useSelector(getArticleSingleCommentsIsLoading)
  const recommendations = useSelector(articleSingleRecommendationsSelectors.selectAll)
  const isLoadingRecommendations = useSelector(getArticleSingleRecommendationsIsLoading)
  const dispatch = useAppDispatch()

  const commentsError = useSelector(getArticleSingleCommentsError)
  const articleDetailsError = useSelector(getArticleDetailsError)

  const onSendComment = useCallback((text: string) => {
    dispatch(sendCommentForArticle(text))
  }, [dispatch])

  useFetchData(() => {
    dispatch(fetchArticleCommentsById(id))
    dispatch(fetchArticleSingleRecommendations())
  })

  if (!id) {
    return <Text text={'Something went wrong!'} />
  }

  let content

  if (articleDetailsError) {
    content = (
        <Text title={getArticleErrorMessage(articleDetailsError)} variant={TextVariants.ERROR} align={TextAligns.CENTER} />
    )
  } else {
    content = (
        <Page className={classNames([cls.articleSingle, className])}>
            <ArticleDetails id={id} />
            <Text title={t('Comments')} className={cls.commentsTitle} />
            <AddCommentForm
                    className={cls.addCommentForm}
                    onSendComment={onSendComment}
            />
            <Text title={t('Recommendations')} className={cls.recommendationTitle} />
            <ArticlesList
              articles={recommendations}
              isLoading={isLoadingRecommendations}
              className={cls.recommendations}
              target={'_blank'}
            />
            <CommentsList
                    comments={comments}
                    isLoading={isLoading}
                    error={getArticleCommentsErrorMessage(commentsError)}
            />
        </Page>
    )
  }

  return <DynamicModuleLoader reducers={reducers}>{content}</DynamicModuleLoader>
}

export default memo(ArticleSinglePage)
