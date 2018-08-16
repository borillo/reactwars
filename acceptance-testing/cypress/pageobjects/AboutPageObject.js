class AboutPageObject {
  constructor(wrapper) {
    this.wrapper = wrapper;
  }

  open() {
    this.wrapper.server();
    this.wrapper.route("/api/teachers", "fixture:teachers");

    this.wrapper.visit("/about");
  }

  teachers() {
    return this.wrapper.get(".teacher");
  }
}

export default AboutPageObject;
