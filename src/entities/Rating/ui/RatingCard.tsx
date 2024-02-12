import { FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ToggleFeatures } from '@/shared/lib/features'
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice'
import {
    Button as ButtonDeprecated,
    ButtonVariants,
} from '@/shared/ui/deprecated/Button'
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import {
    Text as TextDeprecated,
    TextVariants,
} from '@/shared/ui/deprecated/Text'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card } from '@/shared/ui/redesigned/Card'
import { Drawer } from '@/shared/ui/redesigned/Drawer'
import { Input } from '@/shared/ui/redesigned/Input'
import { Modal } from '@/shared/ui/redesigned/Modal'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { StartRating } from '@/shared/ui/redesigned/StartRating'
import { Text } from '@/shared/ui/redesigned/Text'

interface RatingCardProps {
    className?: string
    title: string
    feedbackTitle?: string
    hasFeedback?: boolean
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback: string) => void
    rate?: number
    withPortal?: boolean
}

export const RatingCard: FC<RatingCardProps> = ({
    className,
    title,
    hasFeedback = true,
    feedbackTitle,
    onCancel,
    onAccept,
    rate,
    withPortal = true,
}) => {
    const { t } = useTranslation()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [feedbackText, setFeedbackText] = useState('')
    const [currentStarsCount, setCurrentStarsCount] = useState(0)
    const isMobile = useDevice()

    const onSelectRating = useCallback(
        (starsCount: number) => {
            setCurrentStarsCount(starsCount)
            if (hasFeedback) {
                setIsModalOpen(true)
            } else {
                onCancel?.(starsCount)
            }
        },
        [hasFeedback, onCancel],
    )

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
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <>
                    <Text title={feedbackTitle} />
                    <Input
                        placeholder={t('Your feedback')}
                        value={feedbackText}
                        onChange={setFeedbackText}
                        data-testid={'RatingCard.Input'}
                    />
                </>
            }
            off={
                <>
                    <TextDeprecated
                        title={feedbackTitle}
                        variant={TextVariants.INVERTED}
                    />
                    <InputDeprecated
                        placeholder={t('Your feedback')}
                        value={feedbackText}
                        onChange={setFeedbackText}
                        data-testid={'RatingCard.Input'}
                    />
                </>
            }
        />
    )

    const buttonGroup = (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <HStack gap={'8'}>
                    <Button
                        onClick={acceptHandle}
                        variant={'outline'}
                        fullWidth
                        align={'center'}
                    >
                        {t('Send')}
                    </Button>
                    <Button
                        variant={'outline'}
                        onClick={cancelHandle}
                        fullWidth
                        align={'center'}
                    >
                        {t('Cancel')}
                    </Button>
                </HStack>
            }
            off={
                <VStack gap={'8'}>
                    <ButtonDeprecated
                        onClick={acceptHandle}
                        variant={ButtonVariants.OUTLINE}
                    >
                        {t('Send')}
                    </ButtonDeprecated>
                    <ButtonDeprecated
                        onClick={cancelHandle}
                        variant={ButtonVariants.OUTLINE_RED}
                    >
                        {t('Cancel')}
                    </ButtonDeprecated>
                </VStack>
            }
        />
    )

    const content = (
        <>
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                    <VStack
                        alignItems={'center'}
                        gap={'8'}
                        className={className}
                    >
                        <Text title={title} />
                        <StartRating
                            onSelect={onSelectRating}
                            size={34}
                            selectedStarsCount={rate}
                        />
                    </VStack>
                }
                off={
                    <VStack
                        alignItems={'center'}
                        gap={'8'}
                    >
                        <TextDeprecated title={title} />
                        <StartRating
                            onSelect={onSelectRating}
                            size={50}
                            selectedStarsCount={rate}
                        />
                    </VStack>
                }
            />
            {isMobile ? (
                <Drawer
                    isOpen={isModalOpen}
                    onClose={cancelHandle}
                >
                    <VStack gap={'12'}>
                        {modalContent}
                        {buttonGroup}
                    </VStack>
                </Drawer>
            ) : (
                <Modal
                    isOpen={isModalOpen}
                    lazy
                    withPortal={withPortal}
                >
                    <VStack gap={'12'}>
                        {modalContent}
                        {buttonGroup}
                    </VStack>
                </Modal>
            )}
        </>
    )

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Card
                    padding={'24'}
                    border={'round'}
                >
                    {content}
                </Card>
            }
            off={<CardDeprecated>{content}</CardDeprecated>}
        />
    )
}
