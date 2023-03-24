import { type FC } from 'react'
import cls from './ArticleCodeBlockComponent.module.scss'
import { classNames } from 'shared/lib'
import { Code } from 'shared/ui/code/Code'
import { type ArticleCodeBlock } from '../../model/types/article'

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = ({ className, block }) => {
  return (
      <div className={classNames([cls.articleCodeBlockComponent, className])}>
          <Code text={block.code} />
      </div>
  )
}
