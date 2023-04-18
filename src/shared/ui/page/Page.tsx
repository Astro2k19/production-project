import { useRef, type ReactNode, type MutableRefObject } from 'react'
import cls from './Page.module.scss'
import { classNames } from 'shared/lib'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll'

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = ({ className, children, onScrollEnd }: PageProps) => {
  const rootRef = useRef<HTMLElement>(null) as MutableRefObject<HTMLElement>
  const triggerRef = useRef<HTMLElement>(null) as MutableRefObject<HTMLElement>

  useInfiniteScroll({
    rootTarget: rootRef,
    triggerTarget: triggerRef,
    callback: onScrollEnd
  })

  return (
      <section ref={rootRef} className={classNames([cls.page, className])}>
          {children}
          <div ref={triggerRef} />
      </section>
  )
}
