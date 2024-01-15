import { rtkApi } from '@/shared/api/rtkApi'

import { Article } from '../model/types/article'

const articleApi = rtkApi.injectEndpoints({
    endpoints: build => ({
        fetchArticleById: build.query<Article, string>({
            query: id => ({
                url: `/articles/${id}`,
                method: 'GET',
                params: {
                    _expand: 'user',
                },
            }),
        }),
    }),
})

export const useFetchArticleById = articleApi.useFetchArticleByIdQuery
