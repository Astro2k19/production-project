import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
	describe('Unauthenticated User', () => {
		it('Should display the home page', () => {
			cy.visit('/');
			cy.get(selectByTestId('HomePage')).should('exist');
		});

		it('Should redirect from the profile page to the home page when the user is not authorized', () => {
			cy.visit('/profile/1');
			cy.get(selectByTestId('HomePage')).should('exist');
		});

		it('Should display the 404 page when the user tries to access a non-existent page', () => {
			cy.visit('/not-exist');
			cy.get(selectByTestId('NotFoundPage')).should('exist');
		});
	});

	describe('Authenticated User', () => {
		it('Should display the user profile page', () => {
			cy.login('Admin', '12341234');
			cy.visit('/profile/1');
			cy.get(selectByTestId('ProfilePage')).should('exist');
		});

		it('Should display the articles page', () => {
			cy.login('Admin', '12341234');
			cy.visit('/articles');
			cy.get(selectByTestId('ArticlesPage')).should('exist');
		});
	});
});

export {};
