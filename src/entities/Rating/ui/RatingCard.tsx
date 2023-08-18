import { FC, useState } from 'react'
import cls from './RatingCard.module.scss'
import { classNames } from '@/shared/lib'
import { Card } from '@/shared/ui/card/Card'
import { StartRating } from '@/shared/ui/startRating/StartRating'
import { Button, Input, Modal, Text } from '@/shared/ui'
import { VStack } from '@/shared/ui/stack'
import { useTranslation } from 'react-i18next'

interface RatingCardProps {
  className?: string
  title: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback: string) => void
}

export const RatingCard: FC<RatingCardProps> = ({ className, title, hasFeedback }) => {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [feedbackText, setFeedbackText] = useState('')

  const onSelectRating = (starsCount: number) => {
    if (hasFeedback) {
      setIsModalOpen(true)
    }
  }

  return (
      <Card className={classNames([cls.ratingCard, className])}>
          <VStack alignItems={'center'}>
              <Text title={title} />
              <StartRating onSelect={onSelectRating} />
          </VStack>
          <Modal isOpen={isModalOpen}>
              <Input placeholder={t('Please leave a feedback!')} />
              <Button>
                  {t('Send')}
              </Button>
          </Modal>
      </Card>
  )
}
