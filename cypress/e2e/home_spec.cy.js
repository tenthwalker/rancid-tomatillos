

//User loads the page//
describe('Load Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display "Rancid Tomatillos" heading', () => {
    cy.contains('Rancid Tomatillos');
  });

  it('should display movie cards', () => {
    cy.get('.card').should('exist');
  });
});


//User selects a card//
describe('View Card Details', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display movie details when a card is clicked', () => {
    cy.get('.card').first().click();
    cy.get('.movie-card').should('exist');
  });
});

//User returns to main page//
describe('Return to Main Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should return to the main page when the "Return to All" button is clicked', () => {
    cy.get('.card').first().click();
    cy.get('.back-button').click();
    cy.get('.card').should('exist');
  });
});




describe('API 1', () => {
  it('should successfully retrieve data from API 1', () => {
    // Intercept the GET request to API 1 and use the fixture without the extension
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      fixture: 'apiResponse', // Use the fixture without the file extension
    }).as('api1Request');

    // Visit the main page of your application
    cy.visit('http://localhost:3000');

    // Wait for the API request to complete
    cy.wait('@api1Request');

    // Assertions to check the response data or UI elements
    cy.get('img[src="https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"]').should('be.visible');
  });
});