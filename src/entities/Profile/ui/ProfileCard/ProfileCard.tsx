import { type FC } from 'react'
import cls from './ProfileCard.module.scss'
import { classNames } from 'shared/lib'
import { Input, Loader, Text, TextAligns, TextVariants } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { type Profile } from '../../model/types/profile'
import { Avatar } from 'shared/ui/avatar/Avatar'
import { type Currency, CurrencySelect } from 'entities/Currency'
import { type Country, CountrySelect } from 'entities/Country'
import { getProfileErrorMessage } from '../../model/services/getProfileErrorMessage/getProfileErrorMessage'
import { type ApiError } from 'shared/api/api'

interface ProfileCardProps {
  isLoading?: boolean
  error?: ApiError
  data?: Profile
  className?: string
  readonly?: boolean
  onChangeFirstname: (value: string) => void
  onChangeLastname: (value: string) => void
  onChangeAge: (value: string) => void
  onChangeUsername: (value: string) => void
  onChangeAvatar: (value: string) => void
  onChangeCurrency: (currency: Currency) => void
  onChangeCountry: (country: Country) => void
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
  const {
    isLoading,
    error,
    data,
    className,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry
  } = props
  const { t } = useTranslation('profile')

  if (isLoading) {
    return (
        <div className={classNames([cls.profileCard, className, cls.loading])}>
            <Loader />
        </div>
    )
  }

  if (error) {
    return (
        <div className={classNames([cls.profileCard, className, cls.error])}>
            <Text
              title={t(getProfileErrorMessage(error))}
              variant={TextVariants.ERROR}
              align={TextAligns.CENTER}
            />
        </div>
    )
  }

  const mods = {
    [cls.editing]: !readonly
  }

  return (
      <div className={classNames([cls.profileCard, className], mods)}>
          <Avatar src={data?.avatar} className={cls.avatar}/>
          <div className={cls.inputs}>
              <Input
                  placeholder={t('First name')}
                  value={data?.first}
                  onChange={onChangeFirstname}
                  readOnly={readonly}
              />
              <Input
                  placeholder={t('Last name')}
                  value={data?.lastname}
                  onChange={onChangeLastname}
                  readOnly={readonly}
              />
              <Input
                  placeholder={t('Age')}
                  type='number'
                  value={data?.age}
                  readOnly={readonly}
                  onChange={onChangeAge}
              />
              <Input
                  placeholder={t('Username')}
                  value={data?.username}
                  readOnly={readonly}
                  onChange={onChangeUsername}
              />
              <Input
                  placeholder={t('Avatar')}
                  value={data?.avatar}
                  readOnly={readonly}
                  onChange={onChangeAvatar}
              />
              <CurrencySelect
                  onChange={onChangeCurrency}
                  value={data?.currency}
                  readonly={readonly}
              />
              <CountrySelect
                  onChange={onChangeCountry}
                  value={data?.country}
                  readonly={readonly}
                  />
          </div>
      </div>
  )
}
