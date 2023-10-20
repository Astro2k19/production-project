import { type EntityState } from '@reduxjs/toolkit'

import { type Article, type ArticlesListView } from '@/entities/Article'

import { type ApiError } from '@/shared/api/api'

export interface ArticlesPageListSchema extends EntityState<Article> {
	isLoading?: boolean
	error?: ApiError
	view: ArticlesListView
	limit: number
	hasMore: boolean
	_inited: boolean
}
