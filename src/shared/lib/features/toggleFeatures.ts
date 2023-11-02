import { FeatureFlags } from '../../types/featureFlags'
import { getFeatureFlag } from './setGetFeatureFlags'

interface ToggleFeatureOptions<T> {
    name: keyof FeatureFlags
    on: () => T
    off: () => T
}

export const toggleFeature = <T>({
    name,
    off,
    on,
}: ToggleFeatureOptions<T>) => {
    if (getFeatureFlag(name)) {
        return on()
    }

    return off()
}
