describe('User visit articles page', () => {
	beforeEach(() => {
		cy.login('Test user', '12341234').then(() => {
			cy.visit('articles');
		});
	});

	it('Articles list are successfully loaded', () => {
		cy.intercept('GET', '**/articles?*', { fixture: 'articles-list.json' });
		cy.getByTestId('ArticlesList').should('exist');
		cy.getByTestId('ArticlesListItem').should('exist');
	});
});

// add tests for filter, sorting etc.

export {};
