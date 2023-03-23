import { type FC, useEffect } from 'react'
import cls from './ArticleDetails.module.scss'
import { classNames } from 'shared/lib'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader'
import { ArticleDetailsReducer } from '../../model/slice/ArticleDetailsSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchArticleDetailsById } from '../../model/services/fetchArticleDetailsById/fetchArticleDetailsById'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors/ArticleDetailsSelectors'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'
import { Skeleton } from 'shared/ui/skeleton/Skeleton'
import { Text, TextAligns, TextVariants } from 'shared/ui'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducer: ReducersList = {
  articleDetails: ArticleDetailsReducer
}

export const ArticleDetails: FC<ArticleDetailsProps> = ({ className, id }) => {
  const dispatch = useAppDispatch()
  const article = useAppSelector(getArticleDetailsData)
  const isLoading = useAppSelector(getArticleDetailsIsLoading)
  const error = useAppSelector(getArticleDetailsError)

  useEffect(() => {
    console.log('useEffect in ArticleDetails')
    dispatch(fetchArticleDetailsById(id))
  }, [dispatch])

  let content

  switch (true) {
    case isLoading:
      content = (
          <div>
              <Skeleton width={200} height={200} borderRadius={'50%'} className={cls.avatar} />
              <Skeleton width={'60%'} height={30} className={cls.title} />
              <Skeleton width={'40%'} height={30} />
              <Skeleton width={'100%'} height={230} className={cls.skeleton}/>
              <Skeleton width={'100%'} height={230} className={cls.skeleton}/>
          </div>
      )
      break
    case Boolean(error):
      content = (
          <Text title={'Oops! something went wrong.'} variant={TextVariants.ERROR} align={TextAligns.CENTER} />
      )
      break
    default:
      content = <div>Article Details</div>
  }

  return (
      <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
          <div className={classNames([cls.articleDetails, className])}>
              {content}
          </div>
      </DynamicModuleLoader>
  )
}
