
enum ArticleType {
  IT = 'IT',
  POLITICS = 'POLITICS',
  SPORT = 'SPORT'
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
}

export enum ArticleError {
  NO_DATA = 'NO_DATA',
  ARTICLE_NOT_FOUND = 'ARTICLE_NOT_FOUND',
  SERVER_ERROR = 'SERVER_ERROR'
}
