describe("Input field max characters", () => {
  beforeEach(() => {
    cy.visit("/example-3");

    cy.get("[data-cy='last-name-chars-left-count']").as("charsLeftSpan");

    cy.get("[data-cy='input-last-name']").as("charInput");
  });
  it("displays the appropriate remaining counters count", () => {
    cy.get("@charsLeftSpan").invoke("text").should("equal", "15");

    cy.get("@charInput").type("hello");

    cy.get("@charsLeftSpan").invoke("text").should("equal", "10");

    cy.get("@charInput").type(" my friend");
  });

  it("prevents user from typing more characters once max is exceeded", () => {
    let text = "I am the greatest pirate hunter in the  world";

    cy.get("@charInput").type(text);

    text = text.substring(0, 16);

    cy.get("@charInput").should("have.attr", "value", "I am the greate");
  });
});
