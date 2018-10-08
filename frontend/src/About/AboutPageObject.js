export default class AboutPageObject {
  constructor({ getByTestId }) {
    this.getByTestId = getByTestId;
  }

  obtainTitle() {
    return this.getByTestId("panel-about-title");
  }

  obtainDirectors() {
    return this.getByTestId("directors").children;
  }

  retrieveContainer() {
    return this.container;
  }
}
