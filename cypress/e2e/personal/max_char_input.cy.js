describe("Input field max characters", () => {
  it("displays the appropriate remaining counters count", () => {
    cy.visit("http://localhost:3000/example-2");

    cy.get("span").invoke("text").should("equal", "15");

    cy.get("input").type("hello");

    cy.get("span").invoke("text").should("equal", "10");

    cy.get("input").type(" my friend");
  });

  it("prevents user from typing more characters once max is exceeded", () => {
    cy.visit("http://localhost:3000/example-2");

    cy.get("input").type("I am the greatest pirate hunter in the  world");

    cy.get("input").should("have.attr", "value", "I am the greate");
  });
});
