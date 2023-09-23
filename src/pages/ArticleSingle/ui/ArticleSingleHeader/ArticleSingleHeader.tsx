import { type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'

import { getCanEditArticle } from '../../model/selectors/article'

import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router'
import { classNames } from '@/shared/lib'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { Button, ButtonVariants } from '@/shared/ui/Button'

import cls from './ArticleSingleHeader.module.scss'

interface ArticleSingleHeaderProps {
  className?: string
}

export const ArticleSingleHeader: FC<ArticleSingleHeaderProps> = ({ className }) => {
  const { t } = useTranslation('article')
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()
  const canEdit = useAppSelector(getCanEditArticle)

  const onGoBack = useCallback(() => {
    navigate(getRouteArticles())
  }, [navigate])

  const onEditArticle = useCallback(() => {
    navigate(getRouteArticleEdit(id as string))
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
