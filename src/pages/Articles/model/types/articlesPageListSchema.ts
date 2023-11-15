import { type EntityState } from '@reduxjs/toolkit'

import {
    type Article,
    ArticleType,
    type ArticlesListView,
} from '@/entities/Article'

import { type ApiError } from '@/shared/api/api'
import { SortOrder } from '@/shared/types/sortOrder'

import { ArticlesSortFields } from '../const/articleFiltersConst'

export interface ArticlesPageListSchema extends EntityState<Article> {
    isLoading?: boolean
    error?: ApiError
    view: ArticlesListView
    limit: number
    hasMore: boolean
    _inited: boolean
    sort: ArticlesSortFields
    order: SortOrder
    search: string
    type: ArticleType
    page: number
}
