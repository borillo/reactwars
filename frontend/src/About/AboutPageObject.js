export default class AboutPageObject {
  constructor(wrapper) {
    this.wrapper = wrapper;
  }
 
  obtainTitle() {
    return this.wrapper.update().find('h1').map((film) => film.text())[0];
  }  

  obtainTeachers() {
    return this.wrapper.update().find('.teacher').map((film) => film.text());
  }
}
