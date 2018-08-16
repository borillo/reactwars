import AboutPageObject from "../../pageobjects/AboutPageObject";

context("Teachers", () => {
  let page;

  beforeEach(() => {
    page = new AboutPageObject(cy);
    page.open();
  });

  it("should be listed", () => {
    const teachers = page.teachers();
    
    teachers.should("have.length", 2);
  });
});
