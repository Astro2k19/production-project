import { type FC, memo } from 'react'
import cls from './Articles.module.scss'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

interface ArticlesProps {
  className?: string
}

const Articles: FC<ArticlesProps> = ({ className }) => {
  const { t } = useTranslation('article')

  return (
      <div className={classNames([cls.articles, className])}>
          <Link to={'/articles/1'} >go</Link>
          {t('Articles page')}
      </div>
  )
}

export default memo(Articles)
