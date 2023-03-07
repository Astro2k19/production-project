import { type FC } from 'react'
import cls from './ProfileCard.module.scss'
import { classNames } from 'shared/lib'
import { Button, Input, Loader, Text } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profile')
  const profileData = useAppSelector(getProfileData)
  const isLoading = useAppSelector(getProfileIsLoading)
  // const error = useAppSelector(getProfileError)
  // const readonly = useAppSelector(getProfileReadonly)

  return (
      <div className={classNames([cls.profileCard, className])}>
          {isLoading
            ? <Loader />
            : (<>
                <div className={cls.header}>
                    <Text title={t('Profile')} />
                    <Button>{t('Edit')}</Button>
                </div>
                <div className={cls.inputs}>
                    <Input placeholder={'First name'} value={profileData?.first} />
                    <Input placeholder={'Last name'} value={profileData?.lastname} />
                </div>
            </>)}
      </div>
  )
}
