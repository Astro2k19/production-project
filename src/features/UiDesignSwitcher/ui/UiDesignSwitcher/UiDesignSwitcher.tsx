import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { getUserAuthDate } from '@/entities/User'

import { LOCAL_STORAGE_DESIGN_KEY } from '@/shared/const/localStorage'
import {
    ToggleFeatures,
    getFeatureFlag,
    updateFeatureFlag,
} from '@/shared/lib/features'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector/useAppSelector'
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/ListBox'
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { ListBox, ListBoxItem } from '@/shared/ui/redesigned/Popups'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

interface UiDesignSwitcherProps {
    className?: string
}

type UiDesignSwitcherValue = 'new' | 'old'

export const UiDesignSwitcher = memo(({ className }: UiDesignSwitcherProps) => {
    const { t } = useTranslation()
    const isAppRedesigned = getFeatureFlag('isAppRedesigned')
    const [updateFeature, { error, isLoading }] = updateFeatureFlag()
    const authData = useAppSelector(getUserAuthDate)
    const items = useMemo<Array<ListBoxItem<UiDesignSwitcherValue>>>(
        () => [
            {
                label: t('New design'),
                value: 'new',
            },
            {
                label: t('Old design'),
                value: 'old',
            },
        ],
        [t],
    )

    const onChange = async (value: 'new' | 'old') => {
        if (authData?.id) {
            await updateFeature({
                userId: authData?.id,
                features: {
                    isAppRedesigned: value === 'new',
                },
            })
            localStorage.setItem(LOCAL_STORAGE_DESIGN_KEY, value)
            window.location.reload()
        }
    }

    return (
        <VStack
            className={className}
            gap={'4'}
        >
            <>
                                    <Text text={t('Design')} />
                                    {isLoading ? (
                                        <Skeleton
                                            width={'150px'}
                                            height={'30px'}
                                        />
                                    ) : (
                                        <ListBox
                                            value={isAppRedesigned ? 'new' : 'old'}
                                            items={items}
                                            onChange={onChange}
                                        />
                                    )}
                                </>
        </VStack>
    )
})
