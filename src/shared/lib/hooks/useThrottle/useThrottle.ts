import { type UIEvent, useCallback, useEffect, useRef } from 'react'

export const useThrottle = (
	callback: (...args: any[]) => void,
	delay: number,
) => {
	const throttle = useRef(false)
	const timeoutId = useRef<ReturnType<typeof setTimeout>>()

	useEffect(
		() => () => {
			clearTimeout(timeoutId.current)
		},
		[],
	)

	return useCallback(
		(event: UIEvent<HTMLElement>) => {
			if (!throttle.current) {
				callback(event)
				console.log(throttle.current)

				throttle.current = true

				timeoutId.current = setTimeout(() => {
					throttle.current = false
				}, delay)
			}
		},
		[callback, delay],
	)
}
