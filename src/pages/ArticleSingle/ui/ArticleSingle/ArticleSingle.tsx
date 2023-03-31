import { type FC, memo } from 'react'
import cls from './ArticleSingle.module.scss'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ArticleDetails } from 'entities/Article'
import { Text, TextVariants } from 'shared/ui'
import { CommentsList } from 'entities/Comment'

interface ArticleSingleProps {
  className?: string
}

const ArticleSinglePage: FC<ArticleSingleProps> = ({ className }) => {
  const { t } = useTranslation('article')
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <Text
        title={'Error'}
        text={'Oopps! Some went wrong.'}
        variant={TextVariants.ERROR}
        />
  }

  return (
      <div className={classNames([cls.articleSingle, className])}>
          <ArticleDetails id={id} />
          <Text title={t('Comments')} className={cls.commentsTitle} />
          <CommentsList comments={[
            {
              id: '1',
              user: { id: 1, username: 'Artem', avatar: 'https://www.w3schools.com/howto/img_avatar.png' },
              text: 'comment 1'
            },
            {
              id: '2',
              user: { id: 1, username: 'Artem', avatar: 'https://www.w3schools.com/howto/img_avatar.png' },
              text: 'comment 2'
            }
          ]} isLoading={false} />
      </div>
  )
}

export default memo(ArticleSinglePage)
