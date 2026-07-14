/// <reference types="cypress" />

describe("share location", () => {
  beforeEach(() => {
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
  });
  it("should fetch the user location", () => {
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
  it("share location : shows an error when the name is missing", () => {
    cy.get('[data-cy="get-loc-btn"]').click();
    cy.get('[data-cy="share-loc-btn"]').as("share-btn").click();
    cy.get("#error")
      .should("be.visible")
      .and("contain.text", "enter your name and get your location first");
  });
  it("should share location", () => {
    cy.get('[data-cy="get-loc-btn"]').click();
    cy.get('[data-cy="name-input"]')
      .type("Dummy Name")
      .should("have.value", "Dummy Name");
    cy.window().stub("navigator.clipboard");
    cy.get('[data-cy="share-loc-btn"]').as("share-btn").click();
  });
});
