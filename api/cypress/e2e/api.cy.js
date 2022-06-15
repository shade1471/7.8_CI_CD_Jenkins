const body = require("../fixtures/userBody.json");
const updateBody = require("../fixtures/updatedUserBody.json");

beforeEach(() => {});
describe("Petstore API test", () => {
  it("Should add new user", () => {
    cy.addUser(body).should((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("Should Get info about user by name", () => {
    cy.getUser(body.username).should((response) => {
      expect(response.status).eq(200);
      expect(response.body).to.have.property("lastName", body.lastName);
      expect(response.body).to.have.property("email", body.email);
      expect(response.body.id).to.equal(body.id);
    });
  });

  it("Should delete user", () => {
    cy.deleteUser(body.username).should((response) => {
      expect(response.status).eq(200);
    });
  });

  it("Should get user if it not exist", () => {
    cy.getUser(body.username).should((response) => {
      expect(response.status).eq(404);
      expect(response.body.message).to.eq("User not found");
    });
  });

  it("Should add, update user and then delete it", () => {
    cy.addUser(body);
    cy.updateUser(body.username, updateBody).should((response) => {
      expect(response.status).eq(200);
    });
    cy.getUser(body.username).should((response) => {
      expect(response.status).eq(404);
      expect(response.body.message).to.eq("User not found");
    });
    cy.getUser(updateBody.username).should((response) => {
      expect(response.body.id).to.eq(updateBody.id);
      expect(response.body.username).to.eq(updateBody.username);
    });

    cy.deleteUser(updateBody.username).should((response) => {
      expect(response.status).to.eq(200);
    });
  });

  // it("Should delete all", () => {
  //   cy.deleteUser(body.username);
  //   cy.deleteUser(updateBody.username);
  // });
});
