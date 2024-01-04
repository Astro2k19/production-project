import { rtkApi } from '@/shared/api/rtkApi'

import { FeatureFlags } from '../../../types/featureFlags'
import { getAllFeatureFlag } from '../lib/setGetFeatureFlags'

interface FeaturesApiArgs {
    userId: string
    features: FeatureFlags
}

const featuresApi = rtkApi.injectEndpoints({
    endpoints: build => ({
        updateFeatureFlag: build.mutation<undefined, FeaturesApiArgs>({
            query: ({ userId, features }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    features: {
                        ...getAllFeatureFlag(),
                        ...features,
                    },
                },
            }),
        }),
    }),
})

export const updateFeatureFlag = featuresApi.useUpdateFeatureFlagMutation
