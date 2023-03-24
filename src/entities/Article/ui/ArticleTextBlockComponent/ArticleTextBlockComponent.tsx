import { type FC } from 'react'
import cls from './ArticleTextBlockComponent.module.scss'
import { classNames } from 'shared/lib'
import { type ArticleTextBlock } from '../../model/types/article'
import { Text } from 'shared/ui'

interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = ({ className, block }) => {
  return (
      <div className={classNames([cls.articleTextBlockComponent, className])}>
          {block.title && <Text title={block.title} className={cls.title} />}
          {block.paragraphs.map((paragraph) => <Text text={paragraph} className={cls.paragraph}/>)}
      </div>
  )
}