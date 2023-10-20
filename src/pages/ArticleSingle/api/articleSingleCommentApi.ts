import { Comment } from '@/entities/Comment'

import { rtkApi } from '@/shared/api/rtkApi'

interface sendArticleSingleCommentArgs {
	articleId: string
	userId?: string
	text: string
}

export const articleSingleCommentApi = rtkApi
	.enhanceEndpoints({ addTagTypes: ['article_single_comments'] })
	.injectEndpoints({
		endpoints: build => ({
			fetchArticleSingleComment: build.query<Comment[], string>({
				query: id => ({
					url: '/comments',
					params: {
						articleId: id,
						_expand: 'user', // comment is a child, user is a parent
					},
				}),
				providesTags: ['article_single_comments'],
			}),
			sendArticleSingleComment: build.mutation<
				undefined,
				sendArticleSingleCommentArgs
			>({
				query: args => {
					console.log(args)
					return {
						url: '/comments',
						method: 'POST',
						body: args,
					}
				},
				invalidatesTags: ['article_single_comments'],
			}),
		}),
	})

export const useFetchArticleSingleComment =
	articleSingleCommentApi.useFetchArticleSingleCommentQuery
export const useSendArticleSingleComment =
	articleSingleCommentApi.useSendArticleSingleCommentMutation
