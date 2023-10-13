import { type ArticlesSortFields } from '../const/articleFiltersConst'

import { type ArticleType } from '@/entities/Article'
import { type SortOrder } from '@/shared/types/sortOrder'

export interface ArticlesFiltersSchema {
  sort: ArticlesSortFields
  order: SortOrder
  search: string
  type: ArticleType
  page: number
}