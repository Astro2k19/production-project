import { type FC, type HTMLAttributeAnchorTarget, useCallback } from 'react'
import cls from './ArticlesListItem.module.scss'
import { classNames } from 'shared/lib'
import { type Article, ArticleBlockType, ArticlesListView, type ArticleTextBlock } from '../../model/types/article'
import { Button, ButtonVariants, Text } from 'shared/ui'
import { Card } from 'shared/ui/card/Card'
import { Icon } from 'shared/ui/icon/Icon'
import EyeIcon from 'shared/assets/icons/ant-design_eye-outlined.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Avatar } from 'shared/ui/avatar/Avatar'
import { useTranslation } from 'react-i18next'
import { ArticleTextBlockComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent'
import { AppRoutes } from 'shared/config/routerConfig/routerConfig'

interface ArticlesListItemProps {
  className?: string
  article: Article
  view: ArticlesListView
  target?: HTMLAttributeAnchorTarget
}

export const ArticlesListItem: FC<ArticlesListItemProps> = ({
  className,
  view,
  article,
  target = '_self'
}) => {
  const type = <Text className={cls.type} text={article.type.join(', ')} />

  const views = (
      <div className={cls.views}>
          <Text text={String(article.views)} />
          <Icon Svg={EyeIcon} />
      </div>
  )

  const path = `/${AppRoutes.ARTICLES}/${article.id}`

  const { t } = useTranslation('article')

  if (view === ArticlesListView.GRID) {
    return (
        <Link to={path} target={target} className={classNames([cls.articlesListItem, className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} alt={article.title} className={cls.image}/>
                    <Text text={article.createdAt} className={cls.date}/>
                </div>
                <div className={cls.content}>
                    <div className={cls.info}>
                        {type}
                        {views}
                    </div>
                    <Link to={path} target={target}>
                        <Text title={article.title} className={cls.title} />
                    </Link>
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
              <Link to={path} target={target} className={cls.imageWrapper}>
                  <img src={article.img} className={cls.image} alt={article.title}/>
              </Link>
              {description && <ArticleTextBlockComponent className={cls.description} block={description}/>}
              <div className={cls.footer}>
                  <Link to={path} target={target}>
                      <Button variant={ButtonVariants.OUTLINE}>{t('Read more...')}</Button>
                  </Link>
                  {views}
              </div>
          </Card>
      </div>
  )
}
