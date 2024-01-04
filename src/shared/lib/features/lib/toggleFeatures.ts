import { FeatureFlags } from '../../../types/featureFlags'
import { getFeatureFlag } from './setGetFeatureFlags'

interface ToggleFeatureOptions<T, K> {
    name: keyof FeatureFlags
    on: () => T
    off: () => K
}

export const toggleFeature = <T, K>({
    name,
    off,
    on,
}: ToggleFeatureOptions<T, K>) => {
    if (getFeatureFlag(name)) {
        return on()
    }

    return off()
}
