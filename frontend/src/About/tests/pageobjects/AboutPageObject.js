export default class AboutPageObject {
  constructor({ getByText, container }) {
    this.getByText = getByText;
    this.container = container;
  }

  obtainDirectorWithName(name) {
    return this.getByText(name);
  }

  retrieveContainer() {
    return this.container;
  }
}
