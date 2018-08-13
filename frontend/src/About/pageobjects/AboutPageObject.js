export default class AboutPageObject {
  constructor({ getByTestId }) {
    this.getByTestId = getByTestId;
  }

  obtainTitle() {
    return this.getByTestId("panel-about-title");
  }

  obtainTeachers() {
    return this.getByTestId("teachers").children;
  }
}
