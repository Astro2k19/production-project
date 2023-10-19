import { Article } from '..';

import { rtkApi } from '@/shared/api/rtkApi';

const articleApi = rtkApi.injectEndpoints({
	endpoints: build => ({
		fetchArticleById: build.query<Article, string>({
			query: id => `/articles/${id}`,
		}),
	}),
});

export const useFetchArticleById = articleApi.useFetchArticleByIdQuery;
