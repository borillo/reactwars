export default {
  async retrieveTeachers() {
    let response = await fetch("/api/teachers");
    let teachers = await response.json();

    return teachers;
  }
};
