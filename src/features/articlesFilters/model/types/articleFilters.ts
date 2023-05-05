import { type SortOrder } from 'shared/types/sortOrder'
import { type ArticleType } from 'entities/Article'

export interface ArticlesFiltersSchema {
  sort: ArticlesSortFields
  order: SortOrder
  search: string
  type: ArticleType
}

export enum ArticlesSortFields {
  TITLE = 'title',
  VIEWS = 'views',
  CREATED = 'createdAt'
}
