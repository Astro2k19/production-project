export const setRating = (rating: number, feedback?: string) => {
    cy.getByTestId(`StarRating.${rating}`).click()
    if (feedback) {
        cy.getByTestId('RatingCard.Input').type(feedback)
        cy.getByTestId('RatingCard.Send').click()
    } else {
        cy.getByTestId('RatingCard.Cancel').click()
    }
}

declare global {
    namespace Cypress {
        interface Chainable {
            setRating: (rating: number, feedback?: string) => Chainable<void>
        }
    }
}
