class AboutPageObject {
  constructor(wrapper) {
    this.wrapper = wrapper;

    /* Mock Requests */

    //this.wrapper.server();
    //this.wrapper.route("/api/directors", "fixture:directors");
  }

  open() {
    this.wrapper.visit("/about");
  }

  directors() {
    return this.wrapper.get(".director");
  }
}

export default AboutPageObject;
