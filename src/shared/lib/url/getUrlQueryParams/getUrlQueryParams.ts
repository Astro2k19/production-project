export const addUrlQueryParams = (
    urlOptions?: OptionalRecord<string, string | number | undefined>,
) => {
    const queryParams = getUrlQueryParams(true, urlOptions)
    if (typeof queryParams === 'string') {
        window.history.pushState('', '', queryParams)
    }
}

type ValueType = number | string | undefined

export const getUrlQueryParams = (
    toString: boolean = true,
    urlOptions?: OptionalRecord<string, ValueType>,
): string | URLSearchParams => {
    const urlParams = new URLSearchParams(window.location.search)

    if (urlOptions) {
        Object.entries(urlOptions).forEach(([key, value]) => {
            if (value !== undefined) {
                urlParams.set(key, value as string)
            }
        })
    }

    return toString ? `?${urlParams.toString()}` : urlParams
}
