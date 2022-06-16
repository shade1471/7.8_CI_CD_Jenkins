const clientPage = require("../../fixtures/clientPage.json");
const admPage = require("../../fixtures/adminPage.json");
describe("Main Pages suites", () => {
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
