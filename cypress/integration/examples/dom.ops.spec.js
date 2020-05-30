describe('Perform DOm operations', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/actions')
    })

    it('should clear the input text field',() => {

    cy.get('.action-email').type('fake@email.com');
    cy.get('.action-email').clear()
    cy.get('.action-email').should('have.value', '')
  })

  it('should double click the element',() => {
    cy.get('.action-div').dblclick().should('not.be.visible').should('have.value', '')
  })

  it('should check & uncheck the checkbox',() => {
    cy.get('.action-checkboxes [type="checkbox"]').check(['checkbox1', 'checkbox3']).should('be.checked')
    cy.get('.action-checkboxes [type="checkbox"]').uncheck(['checkbox1', 'checkbox3']).should('not.be.checked')
  })

  it('should check t& uncheck he radio buttons', () => {
      //uncheck the radio buttons is not possible on the radio buttons
    cy.get('.action-radios [type="radio"]').check('radio1').should('be.checked')
  })

  it('should select an element from de dropdown menu', () => {
    cy.get('.action-select').select('oranges')
  })
})