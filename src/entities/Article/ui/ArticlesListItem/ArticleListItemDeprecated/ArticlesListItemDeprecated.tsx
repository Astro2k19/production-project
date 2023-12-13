import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import EyeIcon from '@/shared/assets/icons/ant-design_eye-outlined.svg'
import { INITIAL_TOP_ARTICLES_INDEX_KEY } from '@/shared/const/localStorage'
import { getRouteArticleSingle } from '@/shared/const/router'
import { classNames } from '@/shared/lib'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { Button, ButtonVariants } from '@/shared/ui/deprecated/Button'
import { Card } from '@/shared/ui/deprecated/Card'
import { Icon } from '@/shared/ui/deprecated/Icon'
import { Skeleton } from '@/shared/ui/deprecated/Skeleton'
import { Text } from '@/shared/ui/deprecated/Text'
import { AppImage } from '@/shared/ui/redesigned/AppImage'

import {
    ArticleBlockType,
    ArticlesListView,
} from '../../../model/const/articleConst'
import { ArticleTextBlock } from '../../../model/types/article'
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { ArticlesListItemProps } from '../ArticlesListItem'
import cls from '../ArticlesListItem.module.scss'

export const ArticlesListItemDeprecated: FC<ArticlesListItemProps> = props => {
    const { className, view, article, target = '_self', index } = props

    const { t } = useTranslation()

    const type = (
        <Text
            className={cls.type}
            text={article.type.join(', ')}
        />
    )

    const views = (
        <div className={cls.views}>
            <Text text={String(article.views)} />
            <Icon Svg={EyeIcon} />
        </div>
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
            <Link
                data-testid={'ArticlesListItem'}
                to={path}
                target={target}
                className={classNames([
                    cls.articlesListItem,
                    className,
                    cls[view],
                ])}
                onClick={onCardClick}
            >
                <Card className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <AppImage
                            src={article.img}
                            alt={article.title}
                            className={cls.image}
                            fallback={
                                <Skeleton
                                    width={'100%'}
                                    height={260}
                                />
                            }
                            errorFallback={
                                <Skeleton
                                    width={'100%'}
                                    height={260}
                                />
                            }
                        />
                        <Text
                            text={article.createdAt}
                            className={cls.date}
                        />
                    </div>
                    <div className={cls.content}>
                        <div className={cls.info}>
                            {type}
                            {views}
                        </div>
                        <Text
                            title={article.title}
                            className={cls.title}
                        />
                    </div>
                </Card>
            </Link>
        )
    }

    const description = article.blocks.find(
        block => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock

    return (
        <div
            className={classNames([cls.articlesListItem, className, cls[view]])}
            data-testid={'ArticlesListItem'}
        >
            <Card>
                <div className={cls.header}>
                    <div className={cls.user}>
                        <Avatar
                            src={article.user.avatar}
                            alt={article.user.username}
                            size={30}
                        />
                        <Text text={article.user.username} />
                    </div>
                    <Text text={article.createdAt} />
                </div>
                <Text title={article.title} />
                {type}
                <Link
                    to={path}
                    target={target}
                    className={cls.imageWrapper}
                    onClick={onCardClick}
                >
                    <AppImage
                        src={article.img}
                        alt={article.title}
                        className={cls.image}
                        fallback={
                            <Skeleton
                                width={'100%'}
                                height={178}
                            />
                        }
                        errorFallback={
                            <Skeleton
                                width={'100%'}
                                height={178}
                            />
                        }
                    />
                </Link>
                {description && (
                    <ArticleTextBlockComponent
                        className={cls.description}
                        block={description}
                    />
                )}
                <div className={cls.footer}>
                    <Link
                        to={path}
                        target={target}
                        onClick={onCardClick}
                    >
                        <Button variant={ButtonVariants.OUTLINE}>
                            {t('Read more', { ns: 'translation' })}
                        </Button>
                    </Link>
                    {views}
                </div>
            </Card>
        </div>
    )
}