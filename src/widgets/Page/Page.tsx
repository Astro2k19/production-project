import { useRef, type ReactNode, type MutableRefObject, type UIEvent, useEffect } from 'react'
import cls from './Page.module.scss'
import { classNames } from 'shared/lib'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { savePageScrollActions } from 'features/savePageScroll'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from 'shared/lib/hooks/useAppSelector'
import { getSavePageScrollByKey } from 'features/savePageScroll/model/selectors/getSavePageScroll'
import { useThrottle } from 'shared/lib/hooks/useThrottle'

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = ({ className, children, onScrollEnd }: PageProps) => {
  const rootRef = useRef<HTMLElement>(null) as MutableRefObject<HTMLElement>
  const triggerRef = useRef<HTMLElement>(null) as MutableRefObject<HTMLElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const scrollTop = useAppSelector((state) => getSavePageScrollByKey(state, pathname))

  useInfiniteScroll({
    rootTarget: rootRef,
    triggerTarget: triggerRef,
    callback: onScrollEnd
  })

  const onScroll = useThrottle((event: UIEvent<HTMLElement>) => {
    dispatch(savePageScrollActions.setScrollPosition(
      {
        page: pathname, scroll: event.target.scrollTop
      }
    ))
  }, 500)

  useEffect(() => {
    rootRef.current.scrollTop = scrollTop
  }, [])

  return (
      <section ref={rootRef} className={classNames([cls.page, className])} onScroll={onScroll}>
          {children}
          <div ref={triggerRef} />
      </section>
  )
}
