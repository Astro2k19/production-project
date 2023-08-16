import { type Comment } from '@/entities/Comment'
import { type EntityState } from '@reduxjs/toolkit'
import { type ApiError } from '@/shared/api/api'

export interface ArticleSingleCommentsSchema extends EntityState<Comment> {
  isLoading?: boolean
  error?: ApiError
}
