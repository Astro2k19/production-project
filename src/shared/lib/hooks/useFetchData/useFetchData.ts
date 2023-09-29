import { useEffect } from 'react'

export const useFetchData = (callback: () => void) => {
  console.log(__PROJECT__, '__PROJECT__')
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      callback()
    }
  }, []) // eslint-disable-line
}
