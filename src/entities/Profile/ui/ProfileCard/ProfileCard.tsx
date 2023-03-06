import { type FC } from 'react'
import cls from './ProfileCard.module.scss'
import { classNames } from 'shared/lib'
import { Button, Input, Loader, Text } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { useSelector } from 'react-redux'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const { t } = useTranslation('profile')
  const profileData = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)

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
