import { type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useParams } from 'react-router-dom'

import { ArticleEditButton } from '@/features/ArticleEditButton'

import { getUserAuthDate } from '@/entities/User'

import { getRouteArticles } from '@/shared/const/router'
import { classNames } from '@/shared/lib'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { Button, ButtonVariants } from '@/shared/ui/deprecated/Button'

import cls from './ArticleSingleHeader.module.scss'

interface ArticleSingleHeaderProps {
    className?: string
}

export const ArticleSingleHeader: FC<ArticleSingleHeaderProps> = ({
    className,
}) => {
    const { t } = useTranslation('article')
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()
    const authData = useAppSelector(getUserAuthDate)

    const onGoBack = useCallback(() => {
        navigate(getRouteArticles())
    }, [navigate])

    if (!id || !authData) {
        return null
    }

    return (
        <div className={classNames([cls.articleSingleHeader, className])}>
            <Button
                title={t('Go back to articles')}
                onClick={onGoBack}
                variant={ButtonVariants.OUTLINE}
            >
                {t('Go back to articles')}
            </Button>
            <ArticleEditButton
                articleId={id}
                userId={authData.id}
            />
        </div>
    )
}
