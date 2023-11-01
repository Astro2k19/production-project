import { Article } from '../../../src/entities/Article'

const defaultArticle = {
    userId: '1',
    title: 'Testing article',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1231,
    createdAt: '23.02.2019',
    type: ['IT'],
    blocks: [],
}

export const createArticle = (article?: Article) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles/',
            headers: { authorization: 'test' },
            body: article ?? defaultArticle,
        })
        .then(({ body }) => body)
}

export const removeArticle = (articleId: string | number) => {
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { authorization: 'test' },
    })
}

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle: (article?: Article) => Chainable<Article>
            removeArticle: (articleId: string | number) => Chainable<void>
        }
    }
}
