import { memo } from 'react'
import cls from './ArticleDetails.module.scss'
import { classNames } from 'shared/lib'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { fetchArticleDetailsById } from '../../model/services/fetchArticleDetailsById/fetchArticleDetailsById'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading
} from '../../model/selectors/articleDetails'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'
import { Skeleton } from 'shared/ui/skeleton/Skeleton'
import { Text, TextAligns, TextSize, TextVariants } from 'shared/ui'
import { ArticleBlockType, type ArticleBlockTypes } from '../../model/types/article'
import { Avatar } from 'shared/ui/avatar/Avatar'
import { Icon } from 'shared/ui/icon/Icon'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import EyeIcon from 'shared/assets/icons/ant-design_eye-outlined.svg'
import DateIcon from 'shared/assets/icons/clarity_date-line.svg'
import { useFetchData } from 'shared/lib/hooks/useFetchData'
import { getArticleErrorMessage } from 'entities/Article'

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducer: ReducersList = {
  articleDetails: articleDetailsReducer
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const dispatch = useAppDispatch()
  const article = useAppSelector(getArticleDetailsData)
  const isLoading = useAppSelector(getArticleDetailsIsLoading)
  const error = useAppSelector(getArticleDetailsError)

  const renderBlock = (block: ArticleBlockTypes) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent block={block} className={cls.block} />
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent block={block} className={cls.block} />
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent block={block} className={cls.block} />
      default:
        return null
    }
  }

  useFetchData(() => {
    dispatch(fetchArticleDetailsById(id))
  })

  let content

  if (isLoading) {
    content = (
        <div>
            <Skeleton width={200} height={200} borderRadius={'50%'} className={cls.avatar} />
            <Skeleton width={'60%'} height={30} className={cls.title} />
            <Skeleton width={'40%'} height={30} />
            <Skeleton width={'100%'} height={230} className={cls.skeleton} />
            <Skeleton width={'100%'} height={230} className={cls.skeleton} />
        </div>
    )
  } else if (error) {
    content = (
        <div className={cls.errorWrapper}>
            <Text
              title={getArticleErrorMessage(error)}
              variant={TextVariants.ERROR}
              align={TextAligns.CENTER}
            />
        </div>
    )
  } else {
    content = (
        <article>
            <div className={cls.avatarWrapper}>
                <Avatar src={article?.img} className={cls.avatar} alt={article?.title} size={200} />
            </div>
            <Text
              title={article?.title}
              text={article?.subtitle}
              className={cls.title}
              size={TextSize.L}
            />
            <div className={cls.info}>
                <Icon Svg={EyeIcon} />
                <Text text={String(article?.views)} />
            </div>
            <div className={cls.info}>
                <Icon Svg={DateIcon} />
                <Text text={String(article?.createdAt)} />
            </div>
            <div className={cls.blocks}>
                {article?.blocks.map(renderBlock)}
            </div>
        </article>
    )
  }

  return (
      <DynamicModuleLoader reducers={reducer} removeAfterUnmount={false}>
          <div className={classNames([cls.articleDetails, className])}>
              {content}
          </div>
      </DynamicModuleLoader>
  )
})
