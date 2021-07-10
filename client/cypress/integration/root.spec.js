/// <reference types="cypress" />

describe('Root page', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('should render', () => {
		cy.get('body').should('be.visible');
	});
});
