import { type ArticleBlockType, type ArticleType } from '../conts/articleConts'

import { type User } from '@/entities/User'

interface ArticleBaseBlock {
  id: string
  type: ArticleBlockType
}

export interface ArticleCodeBlock extends ArticleBaseBlock {
  type: ArticleBlockType.CODE
  code: string
}

export interface ArticleImageBlock extends ArticleBaseBlock {
  type: ArticleBlockType.IMAGE
  src: string
  title: string
}

export interface ArticleTextBlock extends ArticleBaseBlock {
  type: ArticleBlockType.TEXT
  title?: string
  paragraphs: string[]
}

export type ArticleBlockTypes = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export interface Article {
  id: string | number
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  type: ArticleType[]
  blocks: ArticleBlockTypes[]
  user: User
  userId: string
}
