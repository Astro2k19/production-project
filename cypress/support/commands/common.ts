import { USER_AUTH_DATA_KEY } from '@/shared/const/localStorage'

import { User } from '../../../src/entities/User'
import { selectByTestId } from '../../helpers/selectByTestId'

export const login = (username = 'Test user', password = '12341234') => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/login',
            body: {
                username,
                password,
            },
        })
        .then(({ body }) => {
            window.localStorage.setItem(
                USER_AUTH_DATA_KEY,
                JSON.stringify(body),
            )

            // cy.visit('/')
            return body
        })
}

type TestIdOptions = Partial<
    Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow
>

export const getByTestId = (id: string, options?: TestIdOptions) =>
    cy.get(selectByTestId(id), options)

declare global {
    namespace Cypress {
        interface Chainable {
            login: (email: string, password: string) => Chainable<User>
            getByTestId: (
                id: string,
                options?: TestIdOptions,
            ) => Chainable<Chainable<JQuery<HTMLElement>>>
        }
    }
}
