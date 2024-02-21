import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { getCanEditArticle } from '@/entities/Article'

import { getRouteArticleEdit } from '@/shared/const/router'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { Button } from '@/shared/ui/redesigned/Button'

interface ArticleEditButtonProps {
    className?: string
    articleId?: string | number
    userId?: string
}

export const ArticleEditButton = memo(
    ({ className, articleId, userId }: ArticleEditButtonProps) => {
        const { t } = useTranslation()
        const canEdit = useAppSelector(getCanEditArticle(userId))

        const navigate = useNavigate()

        const onEdit = useCallback(() => {
            if (articleId) {
                navigate(getRouteArticleEdit(articleId))
            }
        }, [articleId, navigate])

        return canEdit ? (
            <Button
                title={t('Edit')}
                className={className}
                onClick={onEdit}
                variant={'outline'}
            >
                {t('Edit')}
            </Button>
        ) : null
    },
)
