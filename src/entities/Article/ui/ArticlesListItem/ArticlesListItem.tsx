import { type FC, type HTMLAttributeAnchorTarget } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { ArticleBlockType, ArticlesListView } from '../../model/const/articleConst'
import { type Article, type ArticleTextBlock } from '../../model/types/article'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'

import EyeIcon from '@/shared/assets/icons/ant-design_eye-outlined.svg'
import { INITIAL_TOP_ARTICLES_INDEX_KEY } from '@/shared/const/localStorage'
import { getRouteArticleSingle } from '@/shared/const/router'
import { classNames } from '@/shared/lib'
import { AppImage } from '@/shared/ui/AppImage'
import { Avatar } from '@/shared/ui/Avatar'
import { Button, ButtonVariants } from '@/shared/ui/Button'
import { Card } from '@/shared/ui/Card'
import { Skeleton } from '@/shared/ui/Skeleton'
import { Text } from '@/shared/ui/Text'
import { Icon } from '@/shared/ui/icon'

import cls from './ArticlesListItem.module.scss'

interface ArticlesListItemProps {
  className?: string
  article: Article
  view: ArticlesListView
  target?: HTMLAttributeAnchorTarget
  index?: number
}

export const ArticlesListItem: FC<ArticlesListItemProps> = ({
  className,
  view,
  article,
  target = '_self',
  index
}) => {
  const type = <Text className={cls.type} text={article.type.join(', ')} />

  const views = (
      <div className={cls.views}>
          <Text text={String(article.views)} />
          <Icon Svg={EyeIcon} />
      </div>
  )

  const onCardClick = () => {
    if (index) {
      sessionStorage.setItem(INITIAL_TOP_ARTICLES_INDEX_KEY, JSON.stringify(index + 1))
    }
  }

  const path = getRouteArticleSingle(article.id)

  const { t } = useTranslation()

  if (view === ArticlesListView.GRID) {
    return (
        <Link to={path} target={target} className={classNames([cls.articlesListItem, className, cls[view]])} onClick={onCardClick}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <AppImage
                        src={article.img}
                        alt={article.title}
                        className={cls.image}
                        fallback={<Skeleton width={'100%'} height={260}/>}
                        errorFallback={<Skeleton width={'100%'} height={260}/>}
                    />
                    <Text text={article.createdAt} className={cls.date}/>
                </div>
                <div className={cls.content}>
                    <div className={cls.info}>
                        {type}
                        {views}
                    </div>
                    <Text title={article.title} className={cls.title} />
                </div>
            </Card>
        </Link>
    )
  }

  const description = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock

  return (
      <div className={classNames([cls.articlesListItem, className, cls[view]])}>
          <Card>
              <div className={cls.header}>
                  <div className={cls.user}>
                      <Avatar src={article.user.avatar} alt={article.user.username} size={30} />
                      <Text text={article.user.username} />
                  </div>
                  <Text text={article.createdAt} />
              </div>
              <Text title={article.title} />
              {type}
              <Link to={path} target={target} className={cls.imageWrapper} onClick={onCardClick}>
                  <AppImage
                      src={article.img}
                      alt={article.title}
                      className={cls.image}
                      fallback={<Skeleton width={'100%'} height={178}/>}
                      errorFallback={<Skeleton width={'100%'} height={178}/>}
                  />
              </Link>
              {description && <ArticleTextBlockComponent className={cls.description} block={description}/>}
              <div className={cls.footer}>
                  <Link to={path} target={target} onClick={onCardClick}>
                      <Button variant={ButtonVariants.OUTLINE}>{t('Read more', { ns: 'translation' })}</Button>
                  </Link>
                  {views}
              </div>
          </Card>
      </div>
  )
}
