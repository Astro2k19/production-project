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
import { getArticleErrorMessage } from '../../lib/getArticleErrorMessage/getArticleErrorMessage'
import { Flex, HStack, VStack } from 'shared/ui/stack'

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
        return <ArticleCodeBlockComponent block={block} />
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent block={block} />
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent block={block} />
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
        <VStack gap={'12'}>
            <HStack justify={'center'}>
                <Skeleton width={200} height={200} borderRadius={'50%'} />
            </HStack>
            <Skeleton width={'60%'} height={30} />
            <Skeleton width={'40%'} height={30} />
            <Skeleton width={'100%'} height={230}/>
            <Skeleton width={'100%'} height={230}/>
        </VStack>
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
        <VStack gap={'12'} Tag={'div'} className={className}>
            <HStack justify={'center'}>
                <Avatar src={article?.img} alt={article?.title} size={200} />
            </HStack>
            <Text
                    title={article?.title}
                    TitleTag={'h1'}
                    text={article?.subtitle}
                    TextTag={'p'}
                    size={TextSize.L}
                />
            <div>
                <HStack gap={'8'}>
                    <Icon Svg={EyeIcon} />
                    <Text text={String(article?.views)} />
                </HStack>
                <HStack gap={'8'}>
                    <Icon Svg={DateIcon} />
                    <Text text={String(article?.createdAt)} />
                </HStack>
            </div>
            <VStack gap={'32'}>
                {article?.blocks.map(renderBlock)}
            </VStack>
        </VStack>
    )
  }

  return (
      <DynamicModuleLoader reducers={reducer} removeAfterUnmount={false}>
          {content}
      </DynamicModuleLoader>
  )
})
