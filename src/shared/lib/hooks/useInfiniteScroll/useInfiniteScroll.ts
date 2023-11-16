import { type MutableRefObject, useEffect } from 'react'

interface useInfiniteScrollArgs {
    rootTarget: HTMLElement
    triggerTarget: MutableRefObject<HTMLElement>
    callback?: () => void
}

export const useInfiniteScroll = ({
    rootTarget,
    triggerTarget,
    callback,
}: useInfiniteScrollArgs) => {
    useEffect(() => {
        let observer: IntersectionObserver | undefined
        const target = triggerTarget.current

        if (callback) {
            const options = {
                root: rootTarget,
                rootMargin: '0px',
                threshold: 1.0,
            }

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback()
                }
            }, options)

            observer.observe(triggerTarget.current)
        }

        return () => {
            if (observer) {
                observer.unobserve(target)
            }
        }
        // eslint-disable-next-line
    }, [])
}
