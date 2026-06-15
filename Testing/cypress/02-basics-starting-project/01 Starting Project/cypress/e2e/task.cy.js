describe("tasks management", () => {
  it("should open and close the new task modal", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Add Task").click(); // What if text change?!
    cy.get(".backdrop").click({ force: true }); // risky?! but only way than work?! topRigh & 10,10 are not working
    cy.get("backdrop").should("not.exist");
    cy.get(".modal").should("not.exist");

    // cancle btn
    cy.contains("Add Task").click(); // What if text change?!
    cy.contains("Cancel").click();
    cy.get(".backdrop").should("not.exist");
    cy.get("modal").should("not.exist");
  });
  it("should create new task", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Add Task").click();
    cy.get("#title").type("Learning Cypress");
    cy.get("#summary").type("learn basics : get,contains,should,...");
    cy.get(".modal").contains("Add Task").click();
    cy.get(".backdrop").should("not.exist");
    cy.get("modal").should("not.exist");
    cy.get(".task").should("have.length", 1);
    cy.get(".task h2").contains("Learning Cypress");
    cy.get(".task p").contains("learn basics : get,contains,should,...");
  });
  it("should validate user input", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Add Task").click();
    cy.get(".modal").contains("Add Task").click();
    cy.contains("provide values");
    cy.get(".backdrop").should("exist");
    cy.get(".modal").should("exist");
  });
});
