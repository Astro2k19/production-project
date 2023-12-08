import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { CountrySelect } from '@/entities/Country'
import { CurrencySelect } from '@/entities/Currency'

import { ApiError } from '@/shared/api/api'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Card } from '@/shared/ui/redesigned/Card'
import { Input } from '@/shared/ui/redesigned/Input'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import { getProfileErrorMessage } from '../../model/services/getProfileErrorMessage/getProfileErrorMessage'
import { ProfileCardProps } from '../../model/types/profile'

export const ProfileCardRedesigned: FC<ProfileCardProps> = props => {
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

    return (
        <Card
            padding={'24'}
            border={'round'}
        >
            <VStack
                gap={'32'}
                className={className}
            >
                <HStack justify={'center'}>
                    <Avatar
                        size={128}
                        src={data?.avatar}
                    />
                </HStack>
                <HStack gap={'24'}>
                    <VStack
                        gap={'16'}
                        max
                    >
                        <Input
                            label={t('First name')}
                            value={data?.first}
                            onChange={onChangeFirstname}
                            readOnly={readonly}
                            data-testid={'ProfileCard.firstname'}
                        />
                        <Input
                            label={t('Last name')}
                            value={data?.lastname}
                            onChange={onChangeLastname}
                            readOnly={readonly}
                            data-testid={'ProfileCard.lastname'}
                        />
                        <Input
                            label={t('Age')}
                            type="number"
                            value={data?.age}
                            readOnly={readonly}
                            onChange={onChangeAge}
                        />
                        <Input
                            label={t('Username')}
                            value={data?.username}
                            readOnly={readonly}
                            onChange={onChangeUsername}
                        />
                    </VStack>
                    <VStack
                        gap={'16'}
                        max
                    >
                        <Input
                            label={t('Avatar')}
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
                </HStack>
            </VStack>
        </Card>
    )
}

export const ProfileCardRedesignedSkeletons = () => {
    return (
        <Card
            padding={'24'}
            border={'round'}
        >
            <VStack gap={'32'}>
                <HStack justify={'center'}>
                    <Skeleton
                        width={128}
                        height={128}
                        borderRadius={'50%'}
                    />
                </HStack>
                <HStack gap={'24'}>
                    <VStack
                        gap={'16'}
                        max
                    >
                        <Skeleton
                            width={'100%'}
                            height={38}
                        />
                        <Skeleton
                            width={'100%'}
                            height={38}
                        />
                        <Skeleton
                            width={'100%'}
                            height={38}
                        />
                        <Skeleton
                            width={'100%'}
                            height={38}
                        />
                    </VStack>
                    <VStack
                        gap={'16'}
                        max
                    >
                        <Skeleton
                            width={'100%'}
                            height={38}
                        />
                        <Skeleton
                            width={'100%'}
                            height={32}
                        />
                        <Skeleton
                            width={'100%'}
                            height={32}
                        />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    )
}

export const ProfileCardRedesignedError = ({ error }: { error: ApiError }) => {
    return (
        <Text
            title={getProfileErrorMessage(error)}
            variant={'error'}
            align={'center'}
        />
    )
}
