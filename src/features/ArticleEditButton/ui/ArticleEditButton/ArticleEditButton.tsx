import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { getCanEditArticle } from '@/entities/Article'

import { getRouteArticleEdit } from '@/shared/const/router'
import { ToggleFeatures } from '@/shared/lib/features'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import {
    Button as ButtonDeprecated,
    ButtonVariants,
} from '@/shared/ui/deprecated/Button'
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
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <Button
                        title={t('Edit')}
                        className={className}
                        onClick={onEdit}
                        variant={'outline'}
                    >
                        {t('Edit')}
                    </Button>
                }
                off={
                    <ButtonDeprecated
                        title={t('Edit')}
                        className={className}
                        onClick={onEdit}
                        variant={ButtonVariants.OUTLINE}
                    >
                        {t('Edit')}
                    </ButtonDeprecated>
                }
            />
        ) : null
    },
)
