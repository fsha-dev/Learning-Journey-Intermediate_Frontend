/// <reference types="cypress" />

describe("share location", () => {
  it("should fetch the user location", () => {
    cy.visit("/").then((window) => {
      cy.stub(window.navigator.geolocation, "getCurrentPosition")
        .as("getUserPosition")
        .callsFake((callBack) => {
          setTimeout(() => {
            callBack({
              coords: {
                latitude: 37.5,
                logitude: 48.1,
              },
            });
          }, 300);
        });
    });

    cy.get('[data-cy="get-loc-btn"]').as("lock-btn").click();
    cy.get("@getUserPosition").should("have.been.called");
    // when button start fetching; button disables
    cy.get("@lock-btn").should("have.attr", "disabled");
    cy.get(".loader").should("be.visible");
    // when fetched; button disappear
    cy.get("@lock-btn").should("not.exist");
    cy.get('[data-cy="actions"]')
      .should("be.visible")
      .and("contain.text", "Location fetched!");
  });
});
