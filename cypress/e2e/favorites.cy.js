describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/favorites');
  });
  it('should not display any favorites if none exist.', () => {
    cy.get('.mini-fav-container').find('h2').contains('You have no favorites yet!')
  })
  it('should display your favorites if they have been added', () => {
    cy.visit('http://localhost:3000/affirmationCard');
    cy.intercept(
      'GET',
      'https://radiance-app.herokuapp.com/api/v1/affirmations',
      {
        statusCode: 201,
        body: [
          {
            id: 1,
            description: 'This is a test card',
            image:
              'https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_960_720.png',
          },
        ],
      }
    );
    cy.get('.affirmation-card').get('.card-description').contains('This is a test card')
    cy.get('.affirmation-card').get('.affirm-pic')
    cy.get('.favorite-button').click()
    cy.get('.favorite-link').click(3)
    cy.get('.mini-fav-container').should('have.length', 1)

  })
  it('As a user, I should see the footer still display on the favorites page', () => {
    cy.get('.footer').find('.home-link').contains("HOME")
  })
  it('As a user, i should be able to click on the home link in the footer and be routed home', () => {
    cy.get('.footer')
      .get('.home-link')
      .click()
      .url()
      .should('include', '/');
  })
})
