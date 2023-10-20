import { useEffect, useState } from 'react'

export const useDevice = () => {
	const [isMobile, setIsMobile] = useState(
		window.matchMedia('(pointer:coarse)').matches,
	)

	useEffect(() => {
		const onResize = () => {
			setIsMobile(window.matchMedia('(pointer:coarse)').matches)
		}

		window.addEventListener('resize', onResize)

		return () => {
			window.removeEventListener('resize', onResize)
		}
	}, [])

	return isMobile
}
