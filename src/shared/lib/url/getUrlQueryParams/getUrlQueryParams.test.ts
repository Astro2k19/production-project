import { getUrlQueryParams } from './getUrlQueryParams'

describe('getUrlQueryParams', () => {
    afterEach(() => {
        Object.defineProperty(window, 'location', {
            value: {
                search: '',
            },
            writable: true,
        })
    })

    test('with initial window.location.search and queryParams converted to a string', () => {
        Object.defineProperty(window, 'location', {
            value: {
                search: '?search=123&sort=asc',
            },
        })

        const options = {
            search: 'new article',
            type: 'it',
        }

        expect(getUrlQueryParams(true, options)).toBe(
            '?search=new+article&sort=asc&type=it',
        )
    })

    test('with initial urlOptions that has undefined value converted to a string', () => {
        Object.defineProperty(window, 'location', {
            value: {
                search: '',
            },
        })

        const options = {
            search: undefined,
            order: 'desc',
            page: 1,
        }

        expect(getUrlQueryParams(true, options)).toBe('?order=desc&page=1')
    })

    test('with initial window.location.search converted to URLSearchParams', () => {
        Object.defineProperty(window, 'location', {
            value: {
                search: '?search=hello+world&sort=desc',
            },
        })

        const urlOptions = getUrlQueryParams(false) as URLSearchParams

        expect(urlOptions).toBeInstanceOf(URLSearchParams)
        expect(urlOptions.get('search')).toBe('hello world')
        expect(urlOptions.get('sort')).toBe('desc')
        expect(urlOptions.get('page')).toBeNull()
    })
})
