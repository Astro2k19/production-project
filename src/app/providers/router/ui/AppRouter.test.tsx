import { act, screen, waitForElementToBeRemoved } from '@testing-library/react'

import { AppRouter } from './AppRouter'

import { User, UserRoles } from '@/entities/User'
import { getRouteAdminPanel, getRouteMain, getRouteProfile } from '@/shared/const/router'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'

describe('AppRouter tests', () => {
  const authData: User = { id: '1', username: 'test' }
  test('Page should be rendered', async () => {
    await act(async () => componentRender(<AppRouter />, {
      route: getRouteMain()
    }))

    await waitForElementToBeRemoved(screen.queryByTestId('Loading'), {
      timeout: 2000
    })

    const page = await screen.findByTestId('HomePage')
    expect(page).toBeInTheDocument()
  })

  test('Not found page', async () => {
    await act(async () => componentRender(<AppRouter />, {
      route: '/qwerty'
    }))

    const page = await screen.findByTestId('NotFoundPage')
    expect(page).toBeInTheDocument()
  })

  test("Unauthorized user don't have access to protected pages", async () => {
    await act(async () => componentRender(<AppRouter />, {
      route: getRouteProfile('1')
    }))

    const page = await screen.findByTestId('HomePage')
    expect(page).toBeInTheDocument()
  })

  test('Authorized user have access to protected pages', async () => {
    await act(async () => componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: {
          authData
        }
      }
    }))

    await waitForElementToBeRemoved(screen.queryByTestId('Loading'), {
      timeout: 2000
    })

    const page = await screen.findByTestId('ProfilePage')
    expect(page).toBeInTheDocument()
  })

  test("User don't have required roles", async () => {
    await act(async () => componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          authData
        }
      }
    }))

    await waitForElementToBeRemoved(screen.queryByTestId('Loading'), {
      timeout: 2000
    })

    const page = await screen.findByTestId('ForbiddenPage')
    expect(page).toBeInTheDocument()
  })

  test('User have required roles', async () => {
    await act(async () => componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          authData: { ...authData, roles: [UserRoles.ADMIN] }
        }
      }
    }))

    await waitForElementToBeRemoved(screen.queryByTestId('Loading'), {
      timeout: 2000
    })

    const page = await screen.findByTestId('AdminPage')
    expect(page).toBeInTheDocument()
  })
})
