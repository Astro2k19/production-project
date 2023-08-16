import { type FC } from 'react'
// import cls from './ArticleEditPage.module.scss'
import { classNames } from '@/shared/lib'
import { useParams } from 'react-router-dom'

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage: FC<ArticleEditPageProps> = ({ className }) => {
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)

  return (
      <div className={classNames([className])}>
          {isEdit ? 'You are editing page!' : 'you are creating new article'}
      </div>
  )
}

export default ArticleEditPage
