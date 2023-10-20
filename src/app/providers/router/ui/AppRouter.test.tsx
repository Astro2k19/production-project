import { screen } from '@testing-library/react'

import { User, UserRoles } from '@/entities/User'

import {
	getRouteAdminPanel,
	getRouteMain,
	getRouteProfile,
} from '@/shared/const/router'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'

import { AppRouter } from './AppRouter'

describe('AppRouter tests', () => {
	const authData: User = { id: '1', username: 'test' }
	test('Page should be rendered', async () => {
		componentRender(<AppRouter />, {
			route: getRouteMain(),
		})

		const page = await screen.findByTestId('HomePage', undefined, {
			timeout: 2000,
		})

		expect(page).toBeInTheDocument()
	})

	test('Not found page', async () => {
		componentRender(<AppRouter />, {
			route: '/qwerty',
		})

		const page = await screen.findByTestId('NotFoundPage', undefined, {
			timeout: 2000,
		})
		expect(page).toBeInTheDocument()
	})

	test("Unauthorized user don't have access to protected pages", async () => {
		componentRender(<AppRouter />, {
			route: getRouteProfile('1'),
		})

		const page = await screen.findByTestId('HomePage')
		expect(page).toBeInTheDocument()
	})

	test('Authorized user have access to protected pages', async () => {
		componentRender(<AppRouter />, {
			route: getRouteProfile('1'),
			initialState: {
				user: {
					authData,
				},
			},
		})

		const page = await screen.findByTestId('ProfilePage', undefined, {
			timeout: 2000,
		})

		expect(page).toBeInTheDocument()
	})

	test("User don't have required roles", async () => {
		componentRender(<AppRouter />, {
			route: getRouteAdminPanel(),
			initialState: {
				user: {
					authData,
				},
			},
		})

		const page = await screen.findByTestId('ForbiddenPage', undefined, {
			timeout: 2000,
		})

		expect(page).toBeInTheDocument()
	})

	test('User have required roles', async () => {
		componentRender(<AppRouter />, {
			route: getRouteAdminPanel(),
			initialState: {
				user: {
					authData: { ...authData, roles: [UserRoles.ADMIN] },
				},
			},
		})

		const page = await screen.findByTestId('AdminPage', undefined, {
			timeout: 2000,
		})

		expect(page).toBeInTheDocument()
	})
})
