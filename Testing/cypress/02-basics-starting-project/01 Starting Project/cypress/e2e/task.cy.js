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
  it("should filter tasks", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Add Task").click();
    cy.get("#title").type("Learning Cypress 1");
    cy.get("#summary").type("learn basics : get,contains,should,...");
    cy.get("#category").select("urgent");
    cy.get(".modal").contains("Add Task").click();
    cy.get(".task").should("have.length", 1);
    cy.get("#filter").select("moderate");
    cy.get(".task").should("have.length", 0);
    cy.get("#filter").select("urgent");
    cy.get(".task").should("have.length", 1);
    cy.get("#filter").select("all");
    cy.get(".task").should("have.length", 1);
  });
  it("should add multiple tasks", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Add Task").click();
    cy.get("#title").type("Task 1");
    cy.get("#summary").type("learn basics : get,contains,should,...");
    cy.get(".modal").contains("Add Task").click();
    cy.get(".task").should("have.length", 1);

    cy.contains("Add Task").click();
    cy.get("#title").type("Task 2");
    cy.get("#summary").type("learn basics : get,contains,should,...");
    cy.get(".modal").contains("Add Task").click();
    cy.get(".task").should("have.length", 2);

    //Order
    cy.get(".task").eq(0).contains("Task 1");
    cy.get(".task").eq(1).contains("Task 2");
  });
});
// cypress runs test in isolation, order of test is not matter
