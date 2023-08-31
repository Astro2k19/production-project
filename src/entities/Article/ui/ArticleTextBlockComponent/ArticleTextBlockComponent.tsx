import { memo } from 'react'
import cls from './ArticleTextBlockComponent.module.scss'
import { classNames } from '@/shared/lib'
import { type ArticleTextBlock } from '../../model/types/article'
import { Text } from '@/shared/ui/Text'

interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => {
  return (
      <div className={classNames([cls.articleTextBlockComponent, className])}>
          {block.title && (
              <Text title={block.title} className={cls.title} />
          )}
          {block.paragraphs.map((paragraph, index) => <Text text={paragraph} key={index} className={cls.paragraph}/>)}
      </div>
  )
})
