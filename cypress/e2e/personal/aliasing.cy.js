describe("Input field max characters", () => {
  it("displays the appropriate remaining counters count", () => {
    cy.visit("http://localhost:3000/example-3");

    cy.get("[data-cy='last-name-chars-left-count']").as("charsLeftSpan");

    cy.get("[data-cy='input-last-name']").as("charInput");

    cy.get("@charsLeftSpan").invoke("text").should("equal", "15");

    cy.get("@charInput").type("hello");

    cy.get("@charsLeftSpan").invoke("text").should("equal", "10");

    cy.get("@charInput").type(" my friend");
  });

  it("prevents user from typing more characters once max is exceeded", () => {
    cy.visit("http://localhost:3000/example-3");

    cy.get("[data-cy='input-first-name']").type(
      "I am the greatest pirate hunter in the  world"
    );

    cy.get("[data-cy='input-first-name']").should(
      "have.attr",
      "value",
      "I am the greate"
    );
  });
});
