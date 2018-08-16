import fetch from "isomorphic-fetch";

export default {
  async retrieveTeachers() {
    let response = await fetch("/api/teachers");
    let data = await response.json();

    return data;
  }
};
