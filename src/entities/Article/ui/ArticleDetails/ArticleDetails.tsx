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
} from '../../model/selectors/article'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'
import { Skeleton } from 'shared/ui/skeleton/Skeleton'
import { Text, TextAligns, TextSize, TextVariants } from 'shared/ui'
import { ArticleBlockType, type ArticleBlockTypes, ArticleError } from '../../model/types/article'
import { useTranslation } from 'react-i18next'
import { Avatar } from 'shared/ui/avatar/Avatar'
import EyeIcon from 'shared/assets/icons/ant-design_eye-outlined.svg'
import DateIcon from 'shared/assets/icons/clarity_date-line.svg'
import { Icon } from 'shared/ui/icon/Icon'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

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
  const { t } = useTranslation('article')

  const renderBlock = (block: ArticleBlockTypes) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent block={block} />
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent block={block} />
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent block={block} />
      default:
        return null
    }
  }

  useEffect(() => {
    console.log('useEffect in ArticleDetails')
    dispatch(fetchArticleDetailsById(id))
  }, [dispatch, id])

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
              title={t(ArticleError[error])}
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
              className={cls.description}
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
      <DynamicModuleLoader reducers={reducer} removeAfterUnmount>
          <div className={classNames([cls.articleDetails, className])}>
              {content}
          </div>
      </DynamicModuleLoader>
  )
}
