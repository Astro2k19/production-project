import { FeatureFlags } from '../../../types/featureFlags'

let featureFlags: FeatureFlags = {}

export const setFeatureFlag = (flags?: FeatureFlags) => {
    if (flags) {
        featureFlags = flags
    }
}

export const getFeatureFlag = (flag: keyof FeatureFlags) => {
    return featureFlags[flag]
}

export const getAllFeatureFlag = () => {
    console.log(featureFlags, 'featureFlags')
    return featureFlags
}
