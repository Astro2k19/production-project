import cls from './Loader.module.scss'
import { classNames } from 'shared/lib'

interface LoaderProps {
  className?: string
}

export const Loader = ({ className }: LoaderProps) => {
  return (
      <div className={classNames([cls.ldsRoller, className])}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
  )
}
