describe("fill successfull form", () => {
  it("passes", () => {
    cy.visit(" http://localhost:5173/");
    cy.get('[data-cy="email-input"]').type("erdem.guntay@wit.com.tr");
    cy.get('[data-cy="password-input"]').type("9fxIH0GXesEwH_I");
    cy.get('[data-cy="terms-input"]').click();

    cy.get('[data-cy="button-signin"]').should("not.disabled").click();

    cy.url().should("contain", "/success");
  });
});

describe("Types wrong email", () => {
  it("first wrong operation", () => {
    cy.visit(" http://localhost:5173/");
    cy.get('[data-cy="email-input"]').type("erdem.guntay");
    cy.get('[data-cy="wrong-email"]').should(
      "have.text",
      "Please enter a valid email address"
    );
    cy.get('[data-cy="button-signin"]').should("be.disabled");
  });
});

describe("Types wrong email and password", () => {
  it("second wrong operation", () => {
    cy.visit(" http://localhost:5173/");
    cy.get('[data-cy="email-input"]').type("erdem.guntay");
    cy.get('[data-cy="wrong-email"]').should(
      "have.text",
      "Please enter a valid email address"
    );

    cy.get('[data-cy="password-input"]').type("abc");
    cy.get('[data-cy="wrong-password"]').should(
      "have.text",
      "Password must be at least 4 characters long"
    );

    cy.get('[data-cy="button-signin"]').should("be.disabled");
  });
});

describe("Types true email and password but don't agree terms", () => {
  it("third wrong operation", () => {
    cy.visit(" http://localhost:5173/");
    cy.get('[data-cy="email-input"]').type("erdem.guntay@wit.com.tr");
    cy.get('[data-cy="password-input"]').type("9fxIH0GXesEwH_I");

    cy.get('[data-cy="button-signin"]').should("be.disabled");
  });
});
