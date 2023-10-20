import { Notification } from '../model/types/NotificationType'

export const notification: Notification = {
	title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
	description:
		'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
	id: 1,
	userId: 1,
}

export const mockResponse = {
	url: `${__API_URL__}/notifications`,
	method: 'GET',
	status: 200,
	response: [
		{ ...notification, id: 1 },
		{ ...notification, id: 2 },
		{ ...notification, id: 3 },
	],
}
