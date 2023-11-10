import { type FC, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { type Country } from '@/entities/Country'
import { type Currency } from '@/entities/Currency'
import { ProfileCard, ValidateProfileError } from '@/entities/Profile'

import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { Text, TextVariants } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'

import {
    getProfileError,
    getProfileFormData,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
} from '../model/selectors/editableProfileCardSelectors'
import { fetchProfileData } from '../model/services/fetchProfileData/fetctProfileData'
import { profileActions, profileReducer } from '../model/slice/profileSlice'
import { EditableProfileCardHeader } from './EditableProfileCardHeader'

interface EditableProfileCardProps {
    className?: string
    id: string
}

const reducers: ReducersList = {
    profile: profileReducer,
}

export const EditableProfileCard: FC<EditableProfileCardProps> = ({
    className,
    id,
}) => {
    const formData = useAppSelector(getProfileFormData)
    const isLoading = useAppSelector(getProfileIsLoading)
    const error = useAppSelector(getProfileError)
    const profileValidateErrors = useAppSelector(getProfileValidateErrors)
    const readonly = useAppSelector(getProfileReadonly)
    const dispatch = useAppDispatch()
    const { t } = useTranslation('profile')

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData(id))
        }
    }, [dispatch, id])

    const onChangeFirstname = useCallback(
        (value: string) => {
            dispatch(profileActions.setProfileData({ first: value }))
        },
        [dispatch],
    )

    const onChangeLastname = useCallback(
        (value: string) => {
            dispatch(profileActions.setProfileData({ lastname: value }))
        },
        [dispatch],
    )

    const onChangeAge = useCallback(
        (value: string) => {
            dispatch(profileActions.setProfileData({ age: value }))
        },
        [dispatch],
    )

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(profileActions.setProfileData({ username: value }))
        },
        [dispatch],
    )

    const onChangeAvatar = useCallback(
        (value: string) => {
            dispatch(profileActions.setProfileData({ avatar: value }))
        },
        [dispatch],
    )

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileActions.setProfileData({ currency }))
        },
        [dispatch],
    )

    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileActions.setProfileData({ country }))
        },
        [dispatch],
    )

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <VStack gap={'16'}>
                <EditableProfileCardHeader />
                {profileValidateErrors?.length &&
                    profileValidateErrors.map(err => (
                        <Text
                            key={err}
                            variant={TextVariants.ERROR}
                            text={t(
                                `validation_error.${ValidateProfileError[err]}`,
                            )} /* i18next-extract-disable-line */
                            data-testid={'EditableProfileCard.Error'}
                        />
                    ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </VStack>
        </DynamicModuleLoader>
    )
}
