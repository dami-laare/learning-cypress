describe("Input field max characters", () => {
  it("displays the appropriate remaining counters count", () => {
    cy.visit("http://localhost:3000/example-3");

    cy.get("[data-cy='last-name-chars-left-count']")
      .invoke("text")
      .should("equal", "15");

    cy.get("[data-cy='input-last-name']").type("hello");

    cy.get("[data-cy='last-name-chars-left-count']")
      .invoke("text")
      .should("equal", "10");

    cy.get("[data-cy='input-last-name']").type(" my friend");
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
