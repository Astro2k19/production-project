let articleId: string | number;

describe('User visit article single page', () => {
	beforeEach(() => {
		cy.login('Test user', '12341234');
		cy.createArticle().then(article => {
			articleId = article.id;
			cy.visit(`articles/${articleId}`);
		});
	});

	afterEach(() => {
		cy.removeArticle(articleId);
	});

	it('Article info should be loaded', () => {
		cy.getByTestId('ArticleDetails', { timeout: 6000 }).should('exist');
	});

	it('Article recommendations should be loaded', () => {
		cy.getByTestId('ArticleSingleRecommendations').should('exist');
	});

	it('Article comments form should be loaded and add new comment', () => {
		cy.getByTestId('AddCommentForm', { timeout: 6000 }).scrollIntoView();
		cy.addComment('new comment');
		cy.addComment('new comment');
		cy.getByTestId('CommentCard').should('have.length', 2);
	});

	it('Article rating form should be loaded and add new rating', () => {
		cy.getByTestId('StarRating', { timeout: 6000 }).scrollIntoView();
		cy.setRating(4, 'good');
		cy.get('[data-selected="true"]').should('have.length', 4);
	});
});

export {};
