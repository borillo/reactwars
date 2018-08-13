import { TEACHERS_LOAD_START, TEACHERS_LOAD_END } from "./types";
import repository from "../repositories/AboutRepository";

export const loadTeachersAction = () => {
  return async dispatch => {
    dispatch({
      type: TEACHERS_LOAD_START
    });

    const teachers = await repository.retrieveTeachers();

    dispatch({
      type: TEACHERS_LOAD_END,
      payload: teachers
    });
  };
};
