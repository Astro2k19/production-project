import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Page } from '@/widgets/Page'

import { UiDesignSwitcher } from '@/features/UiDesignSwitcher'

import { toggleFeature } from '@/shared/lib/features/lib/toggleFeatures'
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text as TextRedesigned } from '@/shared/ui/redesigned/Text'

const HomePage = memo(() => {
    const { t } = useTranslation()

    const Text = toggleFeature({
        name: 'isAppRedesigned',
        on: () => TextRedesigned,
        off: () => TextDeprecated,
    })

    return (
        <Page dataTestId={'SettingsPage'}>
            <VStack gap={'16'}>
                <Text
                    title={t('Settings')}
                    bold
                />
                <UiDesignSwitcher />
            </VStack>
        </Page>
    )
})
export default HomePage
