import { memo } from 'react'

import { useFetchArticleById } from '../../api/articleApi'
import { ArticleBlockType } from '../../model/const/articleConst'
import { type ArticleBlockTypes } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

import EyeIcon from '@/shared/assets/icons/ant-design_eye-outlined.svg'
import DateIcon from '@/shared/assets/icons/clarity_date-line.svg'
import { AppImage } from '@/shared/ui/AppImage'
import { Skeleton } from '@/shared/ui/Skeleton'
import { HStack, VStack } from '@/shared/ui/Stack'
import { Text, TextSize } from '@/shared/ui/Text'
import { Icon } from '@/shared/ui/icon'

import cls from './ArticleDetails.module.scss'
interface ArticleDetailsProps {
  className?: string
  id: string
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const {
    className,
    id
  } = props
  const {
    data: article,
    isLoading
  } = useFetchArticleById(id)

  const renderBlock = (block: ArticleBlockTypes, index: number) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent block={block} key={index} />
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent block={block} key={index} />
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent block={block} key={index} />
      default:
        return null
    }
  }

  const FallbackLoading = <Skeleton width={200} height={200} borderRadius={'50%'} />

  if (isLoading) {
    return (
        <VStack gap={'12'} data-testid={'ArticleDetails.Loading'}>
            <HStack justify={'center'}>
                <Skeleton width={200} height={200} borderRadius={'50%'} />
            </HStack>
            <Skeleton width={'60%'} height={30} />
            <Skeleton width={'40%'} height={30} />
            <Skeleton width={'100%'} height={230}/>
            <Skeleton width={'100%'} height={230}/>
        </VStack>
    )
  }

  return (
      <VStack
          gap={'12'}
          tag={'div'}
          className={className}
          data-testid={'ArticleDetails'}
      >
          <HStack justify={'center'}>
              <AppImage
                  src={article?.img}
                  alt={article?.title}
                  width={200}
                  height={200}
                  fallback={FallbackLoading}
                  errorFallback={FallbackLoading}
                  className={cls.image}
              />
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
})
