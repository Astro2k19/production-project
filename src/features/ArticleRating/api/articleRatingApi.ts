import { Rating } from '@/entities/Rating'

import { rtkApi } from '@/shared/api/rtkApi'

interface GetArticleRatingArgs {
    userId: string
    articleId: string
}

interface PostArticleRatingArgs extends GetArticleRatingArgs {
    rate: number
    feedback?: string
}

export const articleRatingApi = rtkApi
    .enhanceEndpoints({ addTagTypes: ['article_rating'] })
    .injectEndpoints({
        endpoints: builder => ({
            getArticleRating: builder.query<Rating[], GetArticleRatingArgs>({
                query: args => ({
                    url: '/articles-rating',
                    params: args,
                }),
                providesTags: (result, error, arg) =>
                    result
                        ? [
                              ...result.map(rating => ({
                                  type: 'article_rating' as const,
                                  articleId: arg.articleId,
                              })),
                              'article_rating',
                          ]
                        : ['article_rating'],
            }),
            postArticleRating: builder.mutation<
                undefined,
                PostArticleRatingArgs
            >({
                query: args => ({
                    url: '/articles-rating',
                    method: 'POST',
                    body: args,
                }),
                invalidatesTags: (result, error, arg) => [
                    { type: 'article_rating', articleId: arg.articleId },
                ],
            }),
        }),
    })

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery
export const usePostArticleRating =
    articleRatingApi.usePostArticleRatingMutation
