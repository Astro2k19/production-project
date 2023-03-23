import { type FC, memo } from 'react'
import cls from './ArticleSingle.module.scss'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { ArticleDetails } from 'entities/Article'
import { Text, TextVariants } from 'shared/ui'

interface ArticleSingleProps {
  className?: string
}

const ArticleSingle: FC<ArticleSingleProps> = ({ className }) => {
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
      </div>
  )
}

export default memo(ArticleSingle)
