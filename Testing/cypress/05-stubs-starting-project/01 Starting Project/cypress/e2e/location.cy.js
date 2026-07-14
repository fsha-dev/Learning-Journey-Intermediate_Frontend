/// <reference types="cypress" />

describe("share location", () => {
  it("should fetch the user location", () => {
    cy.visit("/");
    cy.stub(window.navigator.geolocation, "getCurrentPosition")
      .as("getUserPosition")
      .callsFake((callBack) => {
        callBack({
          coords: {
            latitude: 37.5,
            logitude: 48.1,
          },
        });
      });
    cy.get('[data-cy="get-loc-btn"]').as("lock-btn").click();
    cy.get("@getUserPosition").should("have.been.called");
    // when button start fetching; button disables
    cy.get("lock-btn").should("not.exist");
    cy.get('[data-cy="actions"]')
      .should("be.visible")
      .and("have.text", "Location fetched!");
  });
});
