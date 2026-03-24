import SelectablePage from "../pages/selectablePage";

describe("Selectable Grid Test", () => {
  const page = new SelectablePage();

  it("select items and verify", () => {
    page.visit();
    page.clickGridTab();

    page.clickItem("Two");
    page.clickItem("Four");
    page.clickItem("Six");
    page.clickItem("Eight");

    page.verifyItemSelected("Two");
    page.verifyItemSelected("Four");
    page.verifyItemSelected("Six");
    page.verifyItemSelected("Eight");

    page.verifyItemNotSelected("One");
    page.verifyItemNotSelected("Three");
    page.verifyItemNotSelected("Five");
    page.verifyItemNotSelected("Seven");
    page.verifyItemNotSelected("Nine");
  });
});