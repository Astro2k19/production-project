import { ReactElement } from 'react'

import { FeatureFlags } from '@/shared/types/featureFlags'

import { getFeatureFlag } from '../setGetFeatureFlags'

interface ToggleFeaturesProps {
    feature: keyof FeatureFlags
    on: ReactElement
    off: ReactElement
}
export const ToggleFeatures = ({ feature, on, off }: ToggleFeaturesProps) => {
    if (getFeatureFlag(feature)) {
        return on
    }

    return off
}
