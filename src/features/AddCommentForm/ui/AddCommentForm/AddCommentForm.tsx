import { type SyntheticEvent, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import SearchIcon from '@/shared/assets/icons/Search.svg'
import Send from '@/shared/assets/icons/Send.svg'
import { classNames } from '@/shared/lib'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader'
import { ToggleFeatures } from '@/shared/lib/features'
import {
    Button as ButtonDeprecated,
    ButtonVariants,
} from '@/shared/ui/deprecated/Button'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card } from '@/shared/ui/redesigned/Card'
import { Icon } from '@/shared/ui/redesigned/Icon'
import { Input } from '@/shared/ui/redesigned/Input'
import { HStack } from '@/shared/ui/redesigned/Stack'

import { useGetAddCommentFormText } from '../../model/selectors/addCommentFormSelectors'
import {
    addCommentFormReducer,
    useAddCommentFormActions,
} from '../../model/slice/addCommentFormSlice'
import cls from './AddCommentForm.module.scss'

export interface AddCommentFormProps {
    className?: string
    onSendComment: (text: string) => void
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
}

const AddCommentForm = memo(
    ({ className, onSendComment }: AddCommentFormProps) => {
        const { t } = useTranslation()
        const text = useGetAddCommentFormText()
        const { setText } = useAddCommentFormActions()

        const onChangeComment = useCallback(
            (text: string) => {
                setText(text)
            },
            [setText],
        )

        const onSubmitForm = useCallback(
            (event: SyntheticEvent) => {
                event.preventDefault()
                onSendComment(text ?? '')
                setText('')
            },
            [onSendComment, setText, text],
        )

        return (
            <DynamicModuleLoader
                reducers={reducers}
                removeAfterUnmount
            >
                <form
                                            className={className}
                                            onSubmit={onSubmitForm}
                                            data-testid={'AddCommentForm'}
                                        >
                                            <Card padding={'16'}>
                                                <HStack
                                                    gap={'8'}
                                                    alignItems={'center'}
                                                >
                                                    <Input
                                                        size={'M'}
                                                        placeholder={t('Enter comment')}
                                                        onChange={onChangeComment}
                                                        value={text}
                                                        data-testid={'AddCommentForm.Input'}
                                                        addonLeft={<Icon Svg={SearchIcon} />}
                                                    />
                                                    <Button
                                                        type="submit"
                                                        variant={'clear'}
                                                        data-testid={'AddCommentForm.Button'}
                                                    >
                                                        <Icon Svg={Send} />
                                                    </Button>
                                                </HStack>
                                            </Card>
                                        </form>
            </DynamicModuleLoader>
        )
    },
)

export default AddCommentForm
