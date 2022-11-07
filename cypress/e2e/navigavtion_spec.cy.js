describe('Navigation Page', () => {
  beforeEach( () => {
    cy.visit('https://radiance-delta.vercel.app/');
  })

  it('As a user, I should see the application logo', () => {
    cy.get('.radiance-logo');
  })

  it('As a user, when I load the application I should see a title', () => {
    cy.get('.welcome').contains('Hello, you lovely human.')
  })

  it('As a user, when I should be able to click on the button and get routed to an affirmation', () => {
    cy.get('.affirmation-button').click()
      .url().should('include', '/affirmationCard')
  })
})