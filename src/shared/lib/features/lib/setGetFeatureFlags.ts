import { LOCAL_STORAGE_DESIGN_KEY } from '@/shared/const/localStorage'

import { FeatureFlags } from '../../../types/featureFlags'

const defaultFlags: FeatureFlags = {
    isAppRedesigned: localStorage.getItem(LOCAL_STORAGE_DESIGN_KEY) === 'new',
}

let featureFlags: FeatureFlags = {
    ...defaultFlags,
}

export const setFeatureFlag = (flags?: FeatureFlags) => {
    if (flags) {
        featureFlags = flags
    }
}

export const getFeatureFlag = (flag: keyof FeatureFlags) => {
    return featureFlags[flag]
}

export const getAllFeatureFlag = () => {
    return featureFlags
}
