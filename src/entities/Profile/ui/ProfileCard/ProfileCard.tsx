import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { type Country, CountrySelect } from '@/entities/Country'
import { type Currency, CurrencySelect } from '@/entities/Currency'

import { type ApiError } from '@/shared/api/api'
import { classNames } from '@/shared/lib'
import { Avatar } from '@/shared/ui/deprecated/Avatar'
import { Input } from '@/shared/ui/deprecated/Input'
import { Loader } from '@/shared/ui/deprecated/Loader'
import { Text, TextAligns, TextVariants } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'

import { getProfileErrorMessage } from '../../model/services/getProfileErrorMessage/getProfileErrorMessage'
import { type Profile } from '../../model/types/profile'
import cls from './ProfileCard.module.scss'

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

export const ProfileCard: FC<ProfileCardProps> = props => {
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
        onChangeCountry,
    } = props
    const { t } = useTranslation('profile')

    if (isLoading) {
        return (
            <div
                className={classNames([
                    cls.profileCard,
                    className,
                    cls.loading,
                ])}
            >
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <div
                className={classNames([cls.profileCard, className, cls.error])}
            >
                <Text
                    title={getProfileErrorMessage(error)}
                    variant={TextVariants.ERROR}
                    align={TextAligns.CENTER}
                />
            </div>
        )
    }

    const mods = {
        [cls.editing]: !readonly,
    }

    return (
        <VStack
            className={classNames([cls.profileCard, className], mods)}
            gap={'16'}
        >
            <Avatar src={data?.avatar} />
            <VStack gap={'16'}>
                <Input
                    placeholder={t('First name')}
                    value={data?.first}
                    onChange={onChangeFirstname}
                    readOnly={readonly}
                    data-testid={'ProfileCard.firstname'}
                />
                <Input
                    placeholder={t('Last name')}
                    value={data?.lastname}
                    onChange={onChangeLastname}
                    readOnly={readonly}
                    data-testid={'ProfileCard.lastname'}
                />
                <Input
                    placeholder={t('Age')}
                    type="number"
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
            </VStack>
        </VStack>
    )
}
