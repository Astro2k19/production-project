"use strict";
describe('Routing', function () {
    it('User not authorised', function () {
        cy.visit('/');
    });
});
