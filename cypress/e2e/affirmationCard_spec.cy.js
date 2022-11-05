describe('affirmation card ', () => {
  beforeEach(() => {
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
  });

  it('As a user, I should see an affirmation card', () => {
    cy.get('.affirmation-card').get('.card-description').contains('This is a test card')
    cy.get('.affirmation-card').get('.affirm-pic')
    cy.get('.favorite-button').click()
  })

  it('As a user, you should see a footer that has a logo', () => {
    cy.get('.footer').get('.radiance-logo-footer');
  })

  it('As a user, i should be able to click on the home link in the footer and be routed home', () => {
    cy.get('.footer')
      .get('.home-link')
      .click()
      .url()
      .should('include', '/');
  })
  it('As a user, I should be able to click the favorites link in the footer and be routed to favorites', () => {
    cy.get('.footer').get('.favorite-link').click()
      .url().should('include', '/favorites')
  })

});
