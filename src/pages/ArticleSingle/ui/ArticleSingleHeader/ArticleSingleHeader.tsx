import { type FC, useCallback } from 'react'
import cls from './ArticleSingleHeader.module.scss'
import { classNames } from '@/shared/lib'
import { Button, ButtonVariants } from '@/shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { generatePath, useNavigate, useParams } from 'react-router-dom'
import { getCanEditArticle } from '../../model/selectors/article'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { appPaths } from '@/shared/types/router'

interface ArticleSingleHeaderProps {
  className?: string
}

export const ArticleSingleHeader: FC<ArticleSingleHeaderProps> = ({ className }) => {
  const { t } = useTranslation('article')
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const canEdit = useAppSelector(getCanEditArticle)

  const onGoBack = useCallback(() => {
    navigate(appPaths.articles)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    const path = generatePath(appPaths.article_edit, { id })
    navigate(path)
  }, [id, navigate])

  return (
      <div className={classNames([cls.articleSingleHeader, className])}>
          <Button
            title={t('Go back to articles')}
            onClick={onGoBack}
            variant={ButtonVariants.OUTLINE}
          >
              {t('Go back to articles')}
          </Button>
          {canEdit && (
          <Button
              title={t('Click to edit article')}
              onClick={onEditArticle}
              variant={ButtonVariants.OUTLINE}
            >
              {t('Edit article')}
          </Button>
          )}
      </div>
  )
}
