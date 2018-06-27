import data from './about-fixtures.json';

export default {
  retrieveAbout() {
    return Promise.resolve(data);
  }
}