import { type User } from 'entities/User'

export enum ArticleType {
  ALL = 'ALL',
  IT = 'IT',
  POLITICS = 'POLITICS',
  SPORT = 'SPORT',
  ECONOMICS = 'ECONOMICS'
}

export enum ArticleBlockType {
  CODE = 'CODE',
  TEXT = 'TEXT',
  IMAGE = 'IMAGE'
}

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

export enum ArticlesListView {
  GRID = 'GRID',
  LIST = 'LIST'
}

export enum ArticleError {
  NOT_FOUND = 'NOT_FOUND',
  SERVER_ERROR = 'SERVER_ERROR',
  NETWORK_ERROR = 'NETWORK_ERROR'
}
