import { type Comment } from 'entities/Comment'
import { type EntityState } from '@reduxjs/toolkit'

export interface ArticleSingleCommentsSchema extends EntityState<Comment> {
  isLoading?: boolean
  error?: string
}
