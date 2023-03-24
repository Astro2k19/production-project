import { type FC } from 'react'
import cls from './ArticleImageBlockComponent.module.scss'
import { classNames } from 'shared/lib'
import { type ArticleImageBlock } from 'entities/Article/model/types/article'
import { Text, TextAligns } from 'shared/ui'

interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = ({ className, block }) => {
  return (
      <div className={classNames([cls.articleImageBlockComponent, className])}>
          <img src={block.src} alt={block.title} className={cls.image}/>
          <Text text={block.title} align={TextAligns.CENTER} />
      </div>
  )
}