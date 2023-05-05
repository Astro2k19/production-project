import { useCallback, useEffect, useRef, useState } from 'react'

export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
  const timeoutId = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId.current)
    }
  }, [])

  return useCallback(
    (...args: any[]) => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current)
      }

      timeoutId.current = setTimeout(() => {
        callback(args)
      }, delay)
    },
    [callback, delay]
  )
}
