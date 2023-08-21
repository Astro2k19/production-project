import { FC, useCallback, useState } from 'react'
import { Card } from '@/shared/ui/card/Card'
import { StartRating } from '@/shared/ui/startRating/StartRating'
import { Button, ButtonVariants, Input, Modal, Text, TextVariants } from '@/shared/ui'
import { VStack } from '@/shared/ui/stack'
import { useTranslation } from 'react-i18next'
import { useDevice } from '@/shared/lib/hooks/useDevice'
import { Drawer } from '@/shared/ui/drawer/Drawer'

interface RatingCardProps {
  className?: string
  title: string
  feedbackTitle?: string
  hasFeedback?: boolean
  onCancel?: (starsCount: number) => void
  onAccept?: (starsCount: number, feedback: string) => void
}

export const RatingCard: FC<RatingCardProps> =
({
  className,
  title,
  hasFeedback = true,
  feedbackTitle,
  onCancel,
  onAccept
}) => {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [feedbackText, setFeedbackText] = useState('')
  const [currentStarsCount, setCurrentStarsCount] = useState(0)
  const isMobile = useDevice()
  const onSelectRating = useCallback((starsCount: number) => {
    setCurrentStarsCount(starsCount)
    if (hasFeedback) {
      setIsModalOpen(true)
    } else {
      onCancel?.(starsCount)
    }
  }, [hasFeedback, onCancel])

  const cancelHandle = useCallback(() => {
    onCancel?.(currentStarsCount)
    setIsModalOpen(false)
  }, [currentStarsCount, onCancel])

  const acceptHandle = useCallback(() => {
    if (feedbackText.length) {
      onAccept?.(currentStarsCount, feedbackText)
      setIsModalOpen(false)
    }
  }, [currentStarsCount, feedbackText, onAccept])

  const modalContent = (
      <>
          <Text title={feedbackTitle} variant={TextVariants.INVERTED} />
          <Input
              placeholder={t('Your feedback')}
              value={feedbackText}
              onChange={setFeedbackText}
          />
      </>
  )

  return (
      <Card >
          <VStack alignItems={'center'} gap={'8'}>
              <Text title={title} />
              <StartRating onSelect={onSelectRating} size={50} />
          </VStack>
          {isMobile
            ? (
                <Drawer isOpen={isModalOpen} onClose={cancelHandle} >
                    <VStack gap={'12'}>
                        {modalContent}
                        <VStack gap={'8'}>
                            <Button onClick={acceptHandle} variant={ButtonVariants.OUTLINE}>
                                {t('Send')}
                            </Button>
                            <Button onClick={cancelHandle} variant={ButtonVariants.OUTLINE_RED}>
                                {t('Cancel')}
                            </Button>
                        </VStack>
                    </VStack>
                </Drawer>
              )
            : (
                <Modal isOpen={isModalOpen} lazy>
                    <VStack gap={'12'}>
                        {modalContent}
                        <VStack gap={'8'}>
                            <Button onClick={acceptHandle} variant={ButtonVariants.OUTLINE}>
                                {t('Send')}
                            </Button>
                            <Button onClick={cancelHandle} variant={ButtonVariants.OUTLINE_RED}>
                                {t('Cancel')}
                            </Button>
                        </VStack>
                    </VStack>
                </Modal>
              ) }
      </Card>
  )
}
