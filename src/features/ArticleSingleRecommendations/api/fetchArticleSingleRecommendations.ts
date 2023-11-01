import { type Article } from '@/entities/Article'

import { rtkApi } from '@/shared/api/rtkApi'

const articleSingleRecommendationsApi = rtkApi.injectEndpoints({
    endpoints: build => ({
        getArticleRecommendations: build.query<Article[], undefined>({
            query: () => ({
                url: '/articles',
                params: {
                    _limit: 4,
                    _expand: 'user',
                },
            }),
        }),
    }),
})

export const useGetArticleRecommendations =
    articleSingleRecommendationsApi.useGetArticleRecommendationsQuery
