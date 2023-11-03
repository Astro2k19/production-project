import { FeatureFlags } from '@/shared/types/featureFlags'

import { type UserRoles } from '../const/userConst'
import { JsonSettings } from './jsonSettings'

export interface User {
    id: string
    username: string
    avatar?: string
    roles?: UserRoles[]
    features?: FeatureFlags
    jsonSettings?: JsonSettings
}

export interface UserSchema {
    authData?: User
    _inited: boolean
}
