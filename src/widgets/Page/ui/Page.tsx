import { type MutableRefObject, type ReactNode, type UIEvent, useRef } from 'react'
import cls from './Page.module.scss'
import { classNames } from '@/shared/lib'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch'
import { savePageScrollActions, getSavePageScrollByKey } from '@/features/savePageScroll'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector'
import { useDebounce } from '@/shared/lib/hooks/useDebounce'
import { useFetchData } from '@/shared/lib/hooks/useFetchData'

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = ({ className, children, onScrollEnd }: PageProps) => {
  const rootRef = useRef() as MutableRefObject<HTMLElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()
  const scrollTop = useAppSelector((state) => getSavePageScrollByKey(state, pathname))

  useInfiniteScroll({
    rootTarget: rootRef,
    triggerTarget: triggerRef,
    callback: onScrollEnd
  })

  const onScroll = useDebounce((event: UIEvent<HTMLElement>) => {
    const target = event.target as HTMLElement
    dispatch(savePageScrollActions.setScrollPosition(
      {
        page: pathname, scroll: target.scrollTop
      }
    ))
  }, 500)

  useFetchData(() => {
    rootRef.current.scrollTop = scrollTop
  })

  return (
      <section ref={rootRef} className={classNames([cls.page, className])} onScroll={onScroll}>
          {children}
          <div ref={triggerRef} />
      </section>
  )
}
