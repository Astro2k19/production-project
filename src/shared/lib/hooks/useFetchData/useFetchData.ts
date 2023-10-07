import { useEffect } from 'react'

export const useFetchData = (callback: () => void) => {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      callback()
    }
  }, []) // eslint-disable-line
}
