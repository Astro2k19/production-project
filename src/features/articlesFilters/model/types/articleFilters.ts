import { type SortOrder } from 'shared/types/sortOrder'
import { type ArticleType } from 'entities/Article'
import { type ArticlesSortFields } from '../conts/articleFiltersConst'

export interface ArticlesFiltersSchema {
  sort: ArticlesSortFields
  order: SortOrder
  search: string
  type: ArticleType
}
