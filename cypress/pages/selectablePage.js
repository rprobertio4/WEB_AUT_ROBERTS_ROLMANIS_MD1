class SelectablePage {
  visit() {
    cy.visit("https://demoqa.com/selectable");
  }

  clickGridTab() {
    cy.contains("Grid").click();
  }

  clickItem(itemName) {
    cy.contains(".list-group-item", itemName).click();
  }

  verifyItemSelected(itemName) {
    cy.contains(".list-group-item", itemName).should("have.class", "active");
  }

  verifyItemNotSelected(itemName) {
    cy.contains(".list-group-item", itemName).should("not.have.class", "active");
  }
}

export default SelectablePage;