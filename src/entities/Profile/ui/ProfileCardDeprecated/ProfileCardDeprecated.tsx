import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { CountrySelect } from '@/entities/Country'
import { CurrencySelect } from '@/entities/Currency'

import { ApiError } from '@/shared/api/api'
import { classNames } from '@/shared/lib'
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar'
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input'
import { Loader } from '@/shared/ui/deprecated/Loader'
import { Text, TextAligns, TextVariants } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'

import { getProfileErrorMessage } from '../..'
import { ProfileCardProps } from '../ProfileCard/ProfileCard'
import cls from './ProfileCardDeprecated.module.scss'

export const ProfileCardDeprecated: FC<ProfileCardProps> = props => {
    const {
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

    const mods = {
        [cls.editing]: !readonly,
    }

    return (
        <VStack
            className={classNames([cls.profileCard, className], mods)}
            gap={'16'}
        >
            <AvatarDeprecated src={data?.avatar} />
            <VStack gap={'16'}>
                <InputDeprecated
                    placeholder={t('First name')}
                    value={data?.first}
                    onChange={onChangeFirstname}
                    readOnly={readonly}
                    data-testid={'ProfileCard.firstname'}
                />
                <InputDeprecated
                    placeholder={t('Last name')}
                    value={data?.lastname}
                    onChange={onChangeLastname}
                    readOnly={readonly}
                    data-testid={'ProfileCard.lastname'}
                />
                <InputDeprecated
                    placeholder={t('Age')}
                    type="number"
                    value={data?.age}
                    readOnly={readonly}
                    onChange={onChangeAge}
                />
                <InputDeprecated
                    placeholder={t('Username')}
                    value={data?.username}
                    readOnly={readonly}
                    onChange={onChangeUsername}
                />
                <InputDeprecated
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

export const ProfileCardDeprecatedLoader = () => {
    return (
        <div className={classNames([cls.profileCard, cls.loading])}>
            <Loader />
        </div>
    )
}

export const ProfileCardDeprecatedError = ({ error }: { error: ApiError }) => {
    return (
        <div className={classNames([cls.profileCard, cls.error])}>
            <Text
                title={getProfileErrorMessage(error)}
                variant={TextVariants.ERROR}
                align={TextAligns.CENTER}
            />
        </div>
    )
}
