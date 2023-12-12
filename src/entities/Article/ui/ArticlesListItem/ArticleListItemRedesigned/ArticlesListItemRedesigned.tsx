import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import EyeIcon from '@/shared/assets/icons/Eye.svg'
import { INITIAL_TOP_ARTICLES_INDEX_KEY } from '@/shared/const/localStorage'
import { getRouteArticleSingle } from '@/shared/const/router'
import { classNames } from '@/shared/lib'
import { AppImage } from '@/shared/ui/redesigned/AppImage'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card } from '@/shared/ui/redesigned/Card'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import {
    ArticleBlockType,
    ArticlesListView,
} from '../../../model/const/articleConst'
import { ArticleTextBlock } from '../../../model/types/article'
import { ArticlesListItemProps } from '../ArticlesListItem'
import cls from './ArticleListItemRedesigned.module.scss'

export const ArticlesListItemRedesigned: FC<ArticlesListItemProps> = props => {
    const { className, view, article, target = '_self', index } = props

    const { t } = useTranslation()

    const views = (
        <HStack
            className={cls.views}
            gap={'8'}
            alignItems={'center'}
        >
            <Icon Svg={EyeIcon} />
            <Text text={String(article.views)} />
        </HStack>
    )

    const onCardClick = () => {
        if (index) {
            sessionStorage.setItem(
                INITIAL_TOP_ARTICLES_INDEX_KEY,
                JSON.stringify(index + 1),
            )
        }
    }

    const path = getRouteArticleSingle(article.id)

    if (view === ArticlesListView.GRID) {
        return (
            <Card
                border={'round'}
                className={classNames([className, cls[view]])}
            >
                <div className={cls.imageWrapper}>
                    <AppImage
                        src={article.img}
                        alt={article.title}
                        fallback={
                            <Skeleton
                                width={'100%'}
                                height={250}
                            />
                        }
                        errorFallback={
                            <Skeleton
                                width={'100%'}
                                height={250}
                            />
                        }
                    />
                </div>
                <VStack
                    className={cls.content}
                    gap={'4'}
                >
                    <AppLink
                        data-testid={'ArticlesListItem'}
                        to={path}
                        target={target}
                        onClick={onCardClick}
                    >
                        {article.title}
                    </AppLink>
                    <HStack justify={'spaceBetween'}>
                        <Text
                            text={article.createdAt}
                            className={cls.date}
                        />
                        {views}
                    </HStack>
                    <HStack gap={'4'}>
                        <Avatar
                            src={article.user.avatar}
                            alt={article.user.username}
                            size={30}
                        />
                        <Text
                            text={article.user.username}
                            bold
                        />
                    </HStack>
                </VStack>
            </Card>
        )
    }

    const description = article.blocks.find(
        block => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock

    return (
        <Card
            className={classNames([className, cls[view]])}
            data-testid={'ArticlesListItem'}
            padding={'24'}
            border={'round'}
        >
            <VStack gap={'16'}>
                <VStack gap={'8'}>
                    <HStack
                        gap={'8'}
                        alignItems={'center'}
                    >
                        <Avatar
                            src={article.user.avatar}
                            alt={article.user.username}
                            size={30}
                        />
                        <Text
                            text={article.user.username}
                            bold
                        />
                        <Text text={article.createdAt} />
                    </HStack>
                    <Text title={article.title} />
                </VStack>
                <AppImage
                    src={article.img}
                    alt={article.title}
                    className={cls.image}
                    fallback={
                        <Skeleton
                            width={'100%'}
                            height={420}
                        />
                    }
                    errorFallback={
                        <Skeleton
                            width={'100%'}
                            height={420}
                        />
                    }
                />
                {description?.paragraphs && (
                    <Text text={description.paragraphs.slice(0, 2).join(' ')} />
                )}
                <HStack justify={'spaceBetween'}>
                    <Link
                        to={path}
                        target={target}
                        onClick={onCardClick}
                    >
                        <Button variant={'outline'}>
                            {t('Read more', { ns: 'translation' })}
                        </Button>
                    </Link>
                    {views}
                </HStack>
            </VStack>
        </Card>
    )
}
