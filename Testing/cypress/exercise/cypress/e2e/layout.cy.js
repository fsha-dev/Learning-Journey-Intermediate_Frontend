describe("global layout", () => {
  it("should display the site logo", () => {
    cy.visit("https://automationexercise.com/");
    cy.get('img[src *="logo"]').should("be.visible");
  });
  it("should display the menu", () => {
    cy.visit("https://automationexercise.com/");
    cy.get(".shop-menu").should("be.visible");
  });
  it("should display the home item in menu", () => {
    cy.visit("https://automationexercise.com/");
    cy.get('li a[href="/"]').should("be.visible");
    cy.get('li a[href="/"]').should("have.text", "Home");
  });
  it("should display the products item in menu", () => {
    cy.visit("https://automationexercise.com/");
    cy.get('li a[href="/products]').should("be.visible");
    cy.get('li a[href="/products]').should("have.text", "Products");
  });
  it("should display the cart item in menu", () => {
    cy.visit("https://automationexercise.com/");
    cy.get('li a[href="/view_cart]').should("be.visible");
    cy.get('li a[href="/view_cart]').should("have.text", "Cart");
  });
  it("should display the contact item in menu", () => {
    cy.visit("https://automationexercise.com/");
    cy.get('li a[href="/contact_us]').should("be.visible");
    cy.get('li a[href="/contact_us]').should("have.text", "Contact us");
  });
  it("should display the product sections", () => {
    cy.get(".features_items").should("be.visible");
    cy.get(".features_items h2").should("contain.text", "Features Items");
  });
  it("should display the slider in the main page", () => {
    cy.visit("https://automationexercise.com/");
    cy.get("#slider").should("be.visible");
  });
  it("should display the footer", () => {
    cy.visit("https://automationexercise.com/");
    cy.get("#footer").should("be.visible");
  });
});
