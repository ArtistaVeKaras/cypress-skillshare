describe("UI TESTS", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it.skip("should navigate to google's website", () =>{
        cy.visit("https://www.google.com");
    })

    it("should load the login page correctly", () =>{
        cy.get('[data-cy=login-text]').should('have.length', 1)
        cy.get('[data-cy=login-text]').should('be.visible');
    });

    it('should not login when username is not provided',() =>{
        cy.get('[data-cy=password]').type('portugal');
        cy.get('[data-cy=submit-button]').click()
        cy.get('[data-cy=login-text]').should('have.length', 1);
        cy.get('[data-cy=homepage]').should('have.length', 0);
    })

    it('should not allow login when password is not provided', () => {
        cy.get('[data-cy=email]').type('porto@outlook.com');
        cy.get('[data-cy=submit-button]').click()
        cy.get('[data-cy=login-text]').should('have.length', 1);
    })

    it('should login to the homepage with valid credentials', () => {
        cy.get('[data-cy=email]').type('porto@outlook.com');
        cy.get('[data-cy=email]').should('have.value', 'porto@outlook.com');
        cy.get('[data-cy=password]').type('jjjcom');
        cy.get('[data-cy=submit-button]').click()
        cy.get('[data-cy=logout-btn]').should('be.visible')
        cy.get('[data-cy=logout-btn]').should('have.class', 'btn-sm')
    })

    it('should logout succefully', () => {
        cy.get('[data-cy=email]').type('porto@outlook.com');
        cy.get('[data-cy=password]').type('jjjcom');
        cy.get('[data-cy=submit-button]').click()
        cy.get('[data-cy=logout-btn]').click()
        cy.get('[data-cy=logout-text]').should("contain",'You are now logged out')
    })
})