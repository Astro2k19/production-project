export const mockArticleRatingResponse = {
	url: `${__API_URL__}/articles-rating?userId=2&articleId=3`,
	method: 'GET',
	status: 200,
	response: [
		{
			rate: 2,
		},
	],
};
