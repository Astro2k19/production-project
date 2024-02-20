import { type FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { ToggleFeatures } from '@/shared/lib/features'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import {
    Button as ButtonDeprecated,
    ButtonVariants,
} from '@/shared/ui/deprecated/Button'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { Button } from '@/shared/ui/redesigned/Button'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import {
    canEditProfile,
    getProfileError,
    getProfileIsLoading,
    getProfileReadonly,
} from '../../model/selectors/editableProfileCardSelectors'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import { profileActions } from '../../model/slice/profileSlice'

interface EditableProfileCardHeaderProps {
    className?: string
}

export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = ({
    className,
}) => {
    const { t } = useTranslation('profile')
    const readonly = useAppSelector(getProfileReadonly)
    const isLoading = useAppSelector(getProfileIsLoading)
    const error = useAppSelector(getProfileError)
    const dispatch = useAppDispatch()
    const canEdit = useAppSelector(canEditProfile)

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancel = useCallback(() => {
        dispatch(profileActions.cancelUpdate())
    }, [dispatch])

    const onSave = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(updateProfileData())
        }
    }, [dispatch])

    if (isLoading) {
        return (
            <Skeleton
                                    width={'100%'}
                                    height={'90px'}
                                    borderRadius={'round'}
                                />
        )
    }

    return (
        <Card
                            padding={'24'}
                            fullWidth
                            border={'round'}
                        >
                            <HStack
                                justify={'spaceBetween'}
                                alignItems={'center'}
                            >
                                <Text
                                    TitleTag={'h2'}
                                    title={t('Profile', { ns: 'profile' })}
                                />
                                {canEdit &&
                                    !error &&
                                    (readonly ? (
                                        <Button
                                            onClick={onEdit}
                                            variant={'outline'}
                                            data-testid={
                                                'EditableProfileCardHeader.EditButton'
                                            }
                                        >
                                            {t('Edit')}
                                        </Button>
                                    ) : (
                                        <HStack gap={'8'}>
                                            <Button
                                                onClick={onSave}
                                                variant={'outline'}
                                                color={'success'}
                                                data-testid={
                                                    'EditableProfileCardHeader.SaveButton'
                                                }
                                            >
                                                {t('Save')}
                                            </Button>
                                            <Button
                                                onClick={onCancel}
                                                variant={'outline'}
                                                color={'error'}
                                                data-testid={
                                                    'EditableProfileCardHeader.CancelButton'
                                                }
                                            >
                                                {t('Cancel')}
                                            </Button>
                                        </HStack>
                                    ))}
                            </HStack>
                        </Card>
    )
}
