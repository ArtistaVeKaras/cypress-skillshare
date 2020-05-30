describe('noids test', () => {
    it('should navigate to the localhost url', () => {
        cy.visit('http://localhost:3000/noids')
        cy.get('body > :nth-child(1) > :nth-child(1)').check()
    })
})