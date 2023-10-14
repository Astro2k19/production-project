import { USER_AUTH_DATA_KEY } from '@/shared/const/localStorage'

export const login = (username: string, password: string) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: {
      username,
      password
    }
  }).then(({ body }) => {
    window.localStorage.setItem(USER_AUTH_DATA_KEY, JSON.stringify(body))

    cy.visit('/')
  })
}
