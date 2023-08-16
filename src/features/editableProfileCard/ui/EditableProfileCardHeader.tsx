import { type FC, useCallback } from 'react'
import { Button, ButtonVariants, Text } from '@/shared/ui'
import { useTranslation } from 'react-i18next'
import { profileActions } from '../model/slice/profileSlice'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector'
import { updateProfileData } from '../model/services/updateProfileData/updateProfileData'
import { getProfileReadonly } from '../model/selectors/getProfileReadonly/getProfileReadonly'
import {
  getProfileIsLoading
} from '../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from '../model/selectors/getProfileError/getProfileError'
import { canEditProfile } from '../model/selectors/canEditProfile/canEditProfile'
import { HStack } from '@/shared/ui/stack'

interface EditableProfileCardHeaderProps {
  className?: string
}

export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = ({ className }) => {
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

  return (
      <HStack justify={'spaceBetween'} alignItems={'center'}>
          <Text title={t('Profile', { ns: 'profile' })} />
          {canEdit && (
            !error && (
              readonly
                ? (
                    <Button onClick={onEdit} disabled={isLoading} data-testid={'EditableProfileCardHeader.EditButton'}>
                        {t('Edit', { ns: 'profile' })}
                    </Button>
                  )
                : (
                    <HStack gap={'8'}>
                        <Button onClick={onSave} variant={ButtonVariants.OUTLINE} disabled={isLoading} data-testid={'EditableProfileCardHeader.SaveButton'}>
                            {t('Save', { ns: 'profile' })}
                        </Button>
                        <Button onClick={onCancel} variant={ButtonVariants.OUTLINE_RED} disabled={isLoading} data-testid={'EditableProfileCardHeader.CancelButton'}>
                            {t('Cancel', { ns: 'profile' })}
                        </Button>
                    </HStack>
                  )
            )
          )}
      </HStack>
  )
}
