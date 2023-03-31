import { type FC, memo } from 'react'
import cls from './Articles.module.scss'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'

interface ArticlesProps {
  className?: string
}

const ArticlesPage: FC<ArticlesProps> = ({ className }) => {
  const { t } = useTranslation('article')

  return (
      <div className={classNames([cls.articles, className])}>
          {t('Articles page')}
      </div>
  )
}

export default memo(ArticlesPage)
