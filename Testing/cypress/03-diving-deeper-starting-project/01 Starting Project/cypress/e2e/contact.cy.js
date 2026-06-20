describe("page navigation", { defaultCommandTimeout: 5000 }, () => {
  beforeEach(() => {
    cy.visit("/about");
  });
  it.only("should submit the form", () => {
    cy.get('[data-cy="contact-input-message"]').type(
      "hi thanks for your services",
    );
    cy.get('[data-cy="contact-input-name"]').type("faezeh");
    cy.get('[data-cy="contact-input-email"]').type("faezeh@gamil.com");
    cy.get('[data-cy="contact-btn-submit"]').then((el) => {
      expect(el.attr("disabled")).to.be.undefined;
      expect(el.text()).to.eq("Send Message");
    });
    //  cy.get('[data-cy="contact-btn-submit"]')
    //    .contains("Send Message")
    //    .and("not.have.attr", "disabled"); // chaining,should = and
    cy.screenshot();
    // Alias
    cy.get('[data-cy="contact-btn-submit"]').as("submitBtn");
    cy.get("@submitBtn").click();
    cy.screenshot();
    cy.get("@submitBtn").should("have.attr", "disabled");
    cy.screenshot();
    cy.get("@submitBtn").contains("Sending...");
    cy.screenshot();
  });
  it("should submit the form by press enter button", () => {
    cy.get('[data-cy="contact-input-message"]').type(
      "hi thanks for your services",
    );
    cy.get('[data-cy="contact-input-name"]').type("faezeh");

    cy.get('[data-cy="contact-btn-submit"]')
      .contains("Send Message")
      .and("not.have.attr", "disabled"); // chaining,should = and
    cy.get('[data-cy="contact-input-email"]').type("faezeh@gamil.com{enter}"); //🥬🟩 Step: Hit enter key

    // Alias
    cy.get('[data-cy="contact-btn-submit"]').as("submitBtn");
    cy.get("@submitBtn").should("have.attr", "disabled");
    cy.get("@submitBtn").contains("Sending...");
  });
  it("should validate the form input", () => {
    cy.get('[data-cy="contact-btn-submit"]')
      .as("submitBtn")
      .click()
      .should((el) => {
        expect(el).to.not.have.attr("disabled");
        expect(el).to.not.contain.text("Sending...");
      });
    cy.get("@submitBtn").contains("Send Message");
    cy.get('[data-cy="contact-input-message"]')
      .as("inputMessage")
      .focus()
      .blur();
    cy.get("@inputMessage")
      .parent()
      .should("have.attr", "class")
      .and("match", /invalid/);

    cy.get('[data-cy="contact-input-name"]').as("inputName").focus().blur();
    cy.get("@inputName")
      .parent()
      .should("have.attr", "class")
      .and("match", /invalid/);
    cy.get('[data-cy="contact-input-email"]').as("inputEmail").focus().blur();
    cy.get("@inputEmail")
      .parent()
      .should("have.attr", "class")
      .and("match", /invalid/);
  });
});
