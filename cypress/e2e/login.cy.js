const user = require("../fixtures/user.json");
const admPage = require("../fixtures/adminPage.json");

beforeEach(() => {
  cy.viewport(Cypress.env("viewportWidth"), Cypress.env("viewportHeight"));
  cy.visit("/admin");
  cy.get(admPage.header).should("be.visible");
});

describe("Login to admin part of service", () => {
  it("Should login how valid user", () => {
    cy.login(user.login, user.password);
    cy.get(admPage.hallControl).should("be.visible");
  });

  it("Should login how no valid user", () => {
    cy.login(user.badLogin, user.badPassword);
    cy.contains("Ошибка авторизации!").should("be.visible");
  });
});
