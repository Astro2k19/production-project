import { type Story } from '@storybook/react'

import '@/app/styles/index.scss'

import { setFeatureFlag } from '@/shared/lib/features'
import { FeatureFlags } from '@/shared/types/featureFlags'

export const FeatureFlagsDecorator =
    (flags: FeatureFlags) => (StoryComponent: Story) => {
        setFeatureFlag(flags)
        return <StoryComponent />
    }
