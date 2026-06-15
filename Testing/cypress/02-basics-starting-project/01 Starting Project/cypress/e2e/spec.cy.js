/// <reference types="Cypress"/>
// Method 1 for autocomplete : jsonconfig.josn
// Method 2 for autocomplete : reference
describe("Todo App", () => {
  it("should render the main page", () => {
    cy.visit("http://localhost:5173/");
    cy.get(".main-header img"); // Finding element on the page, it find all elements with that tag,class ,id
    // 🚨⁉️ : Chanining
    //  cy.get(".main-header").get("img") //is not looking for img inside main-header, it started from top of the page; sam as cy.get(".main-header"); cy.get("img") any images of entire page
    //  🟩🥬 : Solution for problem above
    cy.get(".main-header").find("img"); // find can only use after get
  });

  it("should display the page title", () => {
    cy.visit("http://localhost:5173/");
    cy.get("h1").should("have.length", 1); //  Implicit and Explicit Assertions
    cy.get("h1").contains("My Cypress Course Tasks"); // look for certain text
  });
});
