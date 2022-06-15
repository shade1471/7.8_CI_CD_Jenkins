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
Cypress.Commands.add("addUser", (body) => {
  cy.request("POST", "/user", body).should((response) => {
    expect(response.status).eq(200);
  });
});

Cypress.Commands.add("logIn", (body) => {
  cy.request(
    "GET",
    `/user/login?username=${body.username}&password=${body.password}`
  ).should((response) => {
    expect(response.status).eq(200);
  });
});

Cypress.Commands.add("deleteUser", (userName) => {
  cy.request("DELETE", `/user/${userName}`);
});

Cypress.Commands.add("getUser", (userName) => {
  cy.request({ url: `/user/${userName}`, failOnStatusCode: false });
});

Cypress.Commands.add("updateUser", (userName, body) => {
  cy.request("PUT", `/user/${userName}`, body);
});
