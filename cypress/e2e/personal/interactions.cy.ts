describe("Basic page interactions", () => {
  beforeEach(() => {
    cy.visit("/example-4");
  });

  it("sets the header text to the item's name when double clicked", () => {
    cy.get("[data-cy=box-1-items-list] > :nth-child(2)").dblclick();

    cy.get("[data-cy=box-1-selected-name]")
      .invoke("text")
      .should("equal", "Option Two");
  });

  it("displays the correct number of checkboxes that are selected", () => {
    cy.get("[data-cy=box-2-checkboxes] > :nth-child(1) input").check();

    cy.get("[data-cy=box-2-checkboxes] > :nth-child(2) input").check();

    cy.get("[data-cy=box-2-checkboxes] > :nth-child(3) input").check();

    cy.get("[data-cy=box-2-selected-count]")
      .invoke("text")
      .should("equal", "3");
  });

  it("sets the header text to the item's name when selected in the dropdown", () => {
    const options = ["Option Two", "Option One", "Option Three"];
    options.forEach((opt) => {
      cy.get("[data-cy=box-3-dropdown]").select(opt);

      cy.get("[data-cy=box-3-selected-name]")
        .invoke("text")
        .should("equal", opt);
    });
  });

  it("sets the header text to the text of the hovered item", () => {
    const options = ["Option One", "Option Two", "Option Three"];
    options.forEach((opt, idx) => {
      cy.get(`[data-cy=box-4-items-list] > :nth-child(${idx + 1})`).trigger(
        "mouseover"
      );

      cy.get("[data-cy=box-4-selected-name]")
        .invoke("text")
        .should("equal", opt);
    });
  });
});
