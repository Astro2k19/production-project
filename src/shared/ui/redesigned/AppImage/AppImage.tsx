import {
    ImgHTMLAttributes,
    ReactElement,
    memo,
    useLayoutEffect,
    useState,
} from 'react'

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src?: string
    className?: string
    fallback?: ReactElement
    errorFallback?: ReactElement
}

export const AppImage = memo((props: AppImageProps) => {
    const { src, fallback, errorFallback, alt = 'image', ...otherProps } = props
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useLayoutEffect(() => {
        const image = new Image()
        image.src = src ?? ''
        image.onload = () => {
            setIsLoading(false)
        }

        image.onerror = () => {
            setIsError(true)
            setIsLoading(false)
        }
    }, [src])

    if (isLoading && fallback) {
        return fallback
    }

    if (isError && errorFallback) {
        return errorFallback
    }

    return (
        <img
            src={src}
            alt={alt}
            {...otherProps}
        />
    )
})
