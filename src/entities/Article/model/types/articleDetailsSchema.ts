import { type ApiError } from '@/shared/api/api'

import { type Article } from './article'

export interface ArticleDetailsSchema {
    isLoading: boolean
    error?: ApiError
    data?: Article
}
