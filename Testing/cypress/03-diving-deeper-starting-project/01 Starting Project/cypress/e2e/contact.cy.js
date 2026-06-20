describe("page navigation", () => {
  it("should submit the form", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="header-about-link"]').click();
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
    // Alias
    cy.get('[data-cy="contact-btn-submit"]').as("submitBtn");
    cy.get("@submitBtn").click();
    cy.get("@submitBtn").should("have.attr", "disabled");
    cy.get("@submitBtn").contains("Sending...");
  });
  it("should submit the form by press enter button", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="header-about-link"]').click();
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
  it.only("should validate the form input", () => {
    cy.visit("http://localhost:5173/about");
    cy.get('[data-cy="contact-btn-submit"]')
      .as("submitBtn")
      .click()
      .then((el) => {
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
      .then((el) => {
        expect(el.attr("class")).to.contains("invalid");
      });
    cy.get('[data-cy="contact-input-name"]').as("inputName").focus().blur();
    cy.get("@inputName")
      .parent()
      .then((el) => {
        expect(el.attr("class")).to.contains("invalid");
      });
    cy.get('[data-cy="contact-input-email"]').as("inputEmail").focus().blur();
    cy.get("@inputEmail")
      .parent()
      .then((el) => {
        expect(el.attr("class")).to.contains("invalid");
      });
  });
});
