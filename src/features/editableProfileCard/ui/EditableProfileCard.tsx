import { type FC, useCallback } from 'react'
import { ProfileCard, ValidateProfileError } from 'entities/Profile'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from '../model/selectors/getProfileError/getProfileError'
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileFormData } from '../model/selectors/getProfileFormData/getProfileFormData'
import { EditableProfileCardHeader } from './EditableProfileCardHeader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { profileActions } from 'features/editableProfileCard'
import { type Currency } from 'entities/Currency'
import { type Country } from 'entities/Country'
import { Text, TextVariants } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { getProfileValidateErrors } from '../model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import { getUserAuthDate } from 'entities/User'

interface EditableProfileCardProps {
  className?: string
}

export const EditableProfileCard: FC<EditableProfileCardProps> = ({ className }) => {
  const formData = useAppSelector(getProfileFormData)
  const isLoading = useAppSelector(getProfileIsLoading)
  const error = useAppSelector(getProfileError)
  const profileValidateErrors = useAppSelector(getProfileValidateErrors)
  const readonly = useAppSelector(getProfileReadonly)
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const profileErrorTranslations = {
    [ValidateProfileError.SERVER_ERROR]: t('Oops! Something went wrong', {
      ns: 'translation'
    }),
    [ValidateProfileError.INVALID_USER_DATA]: t('Firstname and Lastname are required!', {
      ns: 'profile'
    }),
    [ValidateProfileError.INVALID_AGE]: t('Invalid age', {
      ns: 'profile'
    }),
    [ValidateProfileError.INVALID_USERNAME]: t('Invalid username', {
      ns: 'profile'
    })
  }

  const onChangeFirstname = useCallback((value: string) => {
    dispatch(profileActions.setProfileData({ first: value }))
  }, [dispatch])

  const onChangeLastname = useCallback((value: string) => {
    dispatch(profileActions.setProfileData({ lastname: value }))
  }, [dispatch])

  const onChangeAge = useCallback((value: string) => {
    dispatch(profileActions.setProfileData({ age: value }))
  }, [dispatch])

  const onChangeUsername = useCallback((value: string) => {
    dispatch(profileActions.setProfileData({ username: value }))
  }, [dispatch])

  const onChangeAvatar = useCallback((value: string) => {
    dispatch(profileActions.setProfileData({ avatar: value }))
  }, [dispatch])

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.setProfileData({ currency }))
  }, [dispatch])

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.setProfileData({ country }))
  }, [dispatch])

  return (
      <>
          <EditableProfileCardHeader/>
          {profileValidateErrors?.length && profileValidateErrors.map((err) => (
              <Text
                key={err}
                variant={TextVariants.ERROR}
                text={profileErrorTranslations[err]}
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
      </>
  )
}
