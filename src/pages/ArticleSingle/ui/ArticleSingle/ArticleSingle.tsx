import { type FC, memo } from 'react'
import cls from './ArticleSingle.module.scss'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ArticleDetails } from 'entities/Article'
import { Text, TextVariants } from 'shared/ui'
import { CommentsList } from 'entities/Comment'
import { useSelector } from 'react-redux'
import { articleSingleCommentsReducer } from '../../model/slice/articleSingleCommentsSlice'
import {
  articleSingleCommentsSelectors,
  getArticleSingleCommentsError,
  getArticleSingleCommentsIsLoading
} from '../../model/selectors/comments'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader'
import { useFetchData } from 'shared/lib/hooks/useFetchData'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchArticleCommentsById } from '../../model/services/fetchArticleCommentsById/fetchArticleCommentsById'

interface ArticleSingleProps {
  className?: string
}

const reducers: ReducersList = {
  articleSingleComments: articleSingleCommentsReducer
}

const ArticleSinglePage: FC<ArticleSingleProps> = ({ className }) => {
  const { t } = useTranslation('article')
  const { id } = useParams<{ id: string }>()
  const comments = useSelector(articleSingleCommentsSelectors.selectAll)
  const isLoading = useSelector(getArticleSingleCommentsIsLoading)
  const error = useSelector(getArticleSingleCommentsError)
  const dispatch = useAppDispatch()

  useFetchData(() => {
    dispatch(fetchArticleCommentsById(id))
  })

  if (!id || error) {
    return <Text
      title={'Error'}
      text={'Oopps! Some went wrong.'}
      variant={TextVariants.ERROR}
    />
  }

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div className={classNames([cls.articleSingle, className])}>
              <ArticleDetails id={id}/>
              <Text title={t('Comments')} className={cls.commentsTitle}/>
              <CommentsList comments={comments} isLoading={isLoading}/>
          </div>
      </DynamicModuleLoader>
  )
}

export default memo(ArticleSinglePage)
