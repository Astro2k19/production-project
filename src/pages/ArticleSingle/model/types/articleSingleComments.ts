import { type Comment } from 'entities/Comment'

export interface ArticleSingleCommentsSchema {
  isLoading?: boolean
  error?: string
  data?: Comment
}
