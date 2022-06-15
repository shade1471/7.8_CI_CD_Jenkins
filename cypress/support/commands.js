const admPage = require("../fixtures/adminPage.json");
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (login, password) => {
  cy.get(admPage.email).type(login);
  cy.get(admPage.password).type(password);
  cy.get(admPage.logInButton).click();
});

Cypress.Commands.add("selectSeats", (row, ...seats) => {
  for (let i = 0; i < seats.length; i++) {
    cy.get(
      `div.buying-scheme__wrapper > div:nth-child(${row}) > span:nth-child(${seats[i]})`
    ).click();
    cy.get(
      `div.buying-scheme__wrapper > div:nth-child(${row}) > span:nth-child(${seats[i]}).buying-scheme__chair_selected`
    ).should("exist");
  }
});
