
enum ArticleType {
  IT = 'IT',
  POLITICS = 'POLITICS',
  SPORT = 'SPORT'
}

enum ArticleBlockType {
  CODE = 'CODE',
  TEXT = 'TEXT',
  IMAGE = 'IMAGE'
}

interface ArticleBaseBlock {
  id: string
  type: ArticleBlockType
}

interface ArticleCodeBlock extends ArticleBaseBlock {
  type: ArticleBlockType.CODE
  code: string
}

interface ArticleImageBlock extends ArticleBaseBlock {
  type: ArticleBlockType.IMAGE
  src: string
  title: string
}

interface ArticleTextBlock extends ArticleBaseBlock {
  type: ArticleBlockType.TEXT
  title?: string
  paragraphs: string[]
}

type ArticleBlockTypes = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

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
