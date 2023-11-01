let profileId: string
describe('User visit profile page', () => {
    beforeEach(() => {
        cy.login('Test user', '12341234').then(data => {
            profileId = data.id
            cy.visit(`profile/${data.id}`)
        })
    })

    afterEach(() => {
        cy.resetProfile(profileId)
    })

    it('Profile page should be loaded', () => {
        cy.getByTestId('ProfileCard.firstname').should(
            'have.value',
            'test firstname',
        )
    })

    it('Profile card should be updated', () => {
        const firstname = 'new test firstname'
        const lastname = 'new test lastname'
        cy.updateProfile(firstname, lastname)

        cy.getByTestId('ProfileCard.firstname').should('have.value', firstname)
        cy.getByTestId('ProfileCard.lastname').should('have.value', lastname)
    })
})

export {}
