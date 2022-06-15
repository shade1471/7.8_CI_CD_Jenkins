const admPage = require("../fixtures/adminPage.json");
const clientPage = require("../fixtures/clientPage.json");

describe("Main Pages suites", () => {
  beforeEach(() => {
    cy.viewport(Cypress.env("viewportWidth"), Cypress.env("viewportHeight"));
  });
  it("Should check main page's client", () => {
    cy.visit("/client/index.php");
    cy.get(clientPage.header).should("be.visible");
    cy.get(clientPage.navMenu).should("be.visible");
  });

  it("Should check main page's admin", () => {
    cy.visit("/admin");
    cy.get(admPage.header).contains("Администраторррская");
  });
});
