export default class AboutPageObject {
  constructor({ getByText }) {
    this.getByText = getByText;
  }

  obtainWithTitle(title) {
    return this.getByText(title);
  }

  obtainDirectorWithName(name) {
    return this.getByText(name);
  }

  retrieveContainer() {
    return this.container;
  }
}
