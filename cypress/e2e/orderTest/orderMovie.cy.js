const user = require("../../fixtures/user.json");
const admPage = require("../../fixtures/adminPage.json");
const hall = require("../../fixtures/hall.json");
const clientPage = require("../../fixtures/clientPage.json");

beforeEach(() => {
  cy.viewport(Cypress.env("viewportWidth"), Cypress.env("viewportHeight"));
  cy.visit("/admin");
  cy.get(admPage.header).should("be.visible");
  cy.login(user.login, user.password);
});

hall.forEach((hall) => {
  it(`Should order movie in '${hall.name}' hall`, () => {
    // Проверка в админке доступности зала из fixtures
    cy.get(admPage.hallControl).within(() => {
      cy.contains(hall.name).should("exist");
    });
    cy.visit("/client");
    cy.get(clientPage.navDayTomorrow).click();
    // Поиск нужного зала и выбор первого сеанса для него
    cy.contains(`${hall.name}`).next().click("left");
    cy.get(clientPage.orderHeader).should("contain", `${hall.name}`);
    // Выбор ряда и мест
    cy.selectSeats(6, 1, 2, 3);
    cy.get(clientPage.orderButton).click();
    cy.contains("Вы выбрали билеты:").should("be.visible");
    //Окончательное бронирование:
    // cy.get(clientPage.orderButton).click();
    // cy.get(clientPage.qrCode).should("be.visible");
  });
});
