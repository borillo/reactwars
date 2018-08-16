import db from "../../../../backend/database/db";

export default {
  retrieveFilms() {
    return Promise.resolve(db.films);
  }
};
