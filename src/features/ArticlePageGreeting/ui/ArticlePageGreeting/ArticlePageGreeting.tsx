import { memo, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { setJsonSettings, useUserJsonSettings } from '@/entities/User'

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Modal } from '@/shared/ui/deprecated/Modal'

interface ArticlePageGreetingProps {
    className?: string
}

export const ArticlePageGreeting = memo(
    ({ className }: ArticlePageGreetingProps) => {
        const { t } = useTranslation()
        const [isOpen, setIsOpen] = useState(false)
        const { wasArticlesPageOpened } = useUserJsonSettings()
        const dispatch = useAppDispatch()

        useEffect(() => {
            if (!wasArticlesPageOpened) {
                setIsOpen(true)
                dispatch(
                    setJsonSettings({
                        wasArticlesPageOpened: true,
                    }),
                )
            }
        }, []) // eslint-disable-line

        return (
            <Modal
                isOpen={isOpen}
                lazy
                onClose={() => {
                    setIsOpen(false)
                }}
            >
                {t(
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. blanditiis consectetur culpa ' +
                        'cupiditate earum et eveniet fugit ipsa, iure iusto laboriosam odio' +
                        ' quae qui quis repellat repellendus ullam veniam veritatis.',
                )}
            </Modal>
        )
    },
)
