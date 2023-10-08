import { createContext, ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react'

export type Spring = typeof import('@react-spring/web')
export type Gesture = typeof import('@use-gesture/react')

interface AnimationProviderContext {
  Spring?: Spring
  Gesture?: Gesture
  isLoaded?: boolean
}

export const AnimationContext = createContext<AnimationProviderContext>({})

export const useAnimLibs = () => {
  return useContext(AnimationContext) as Required<AnimationProviderContext>
}

const loadAnimationLibs = async () => {
  return await Promise.all([
    import('@react-spring/web'),
    import('@use-gesture/react')
  ])
}

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const spring = useRef<Spring>()
  const gesture = useRef<Gesture>()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    loadAnimationLibs().then(([Spring, Gesture]) => {
      spring.current = Spring
      gesture.current = Gesture
      setIsLoaded(true)
    })
  }, [])

  const value = useMemo(() => ({
    Spring: spring.current,
    Gesture: gesture.current,
    isLoaded
  }), [isLoaded])

  return (
      <AnimationContext.Provider value={value}>
          {children}
      </AnimationContext.Provider>
  )
}
