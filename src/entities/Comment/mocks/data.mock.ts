import { Comment } from '..';

import avatar from '@/shared/assets/images/tests/avatar.jpg';

export const comment: Comment = {
	user: {
		id: '1',
		username: 'User',
		avatar,
	},
	id: '1',
	text: 'Comment 1',
};

export const mockCommentResponse = {
	url: `${__API_URL__}/comments?articleId=1&_expand=user`,
	method: 'GET',
	status: 200,
	response: [
		{ ...comment, id: '1' },
		{ ...comment, id: '2' },
		{ ...comment, id: '3' },
	],
};
