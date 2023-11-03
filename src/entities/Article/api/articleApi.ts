import { rtkApi } from '@/shared/api/rtkApi'

import { Article } from '../model/types/article'

const articleApi = rtkApi.injectEndpoints({
    endpoints: build => ({
        fetchArticleById: build.query<Article, string>({
            query: id => `/articles/${id}`,
        }),
    }),
})

export const useFetchArticleById = articleApi.useFetchArticleByIdQuery
