class AboutPageObject {
  constructor(browser) {
    this.browser = browser;
  }

  open() {
    this.browser.visit("/about");
  }

  greetingText() {
    return this.browser.get(".panel-about h1");
  }

  directors() {
    return this.browser.get(".director");
  }
}

export default AboutPageObject;
