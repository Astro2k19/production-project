import React, { memo } from 'react'
import { RatingCard } from '@/entities/Rating'
import { useTranslation } from 'react-i18next'

interface ArticleRatingProps {
  className?: string
}

export const ArticleRating = memo(({ className }: ArticleRatingProps) => {
  const { t } = useTranslation()

  const onAccept = (num: number, text: string) => {
    console.log(num, text, 'accept')
  }

  const onCancel = (num: number) => {
    console.log(num, 'cancel')
  }

  return (
      <RatingCard
          title={t('How do you like the article?', { ns: 'article' })}
          feedbackTitle={t('Please, leave a feedback!')}
          onAccept={onAccept}
          onCancel={onCancel}
          className={className}
      />
  )
})
