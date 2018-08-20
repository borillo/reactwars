import componentDom from "./dom/init";
import FilmsPageObject from "../FilmsPageObject";

import db from "../../../../backend/database/db";
const FILM_TITLES = db.titles;
const NUMBER_OF_FILMS = db.numberOfFilms;

describe("Films", () => {
  let page;

  beforeEach(() => {
    page = new FilmsPageObject(componentDom);
  });

  test("should be listed", async () => {
    let filmList = page.obtainFilms();

    expect(filmList).toHaveLength(NUMBER_OF_FILMS);
  });

  test("should show name for each shown episode", async () => {
    const filmsTitles = page.obtainFilmsTitles();

    expect(filmsTitles).toEqual(FILM_TITLES);
  });

  test("should be ordered by episode number", async () => {
    let episodes = page.obtainFilmsEpisodes();
    
    episodes.forEach((episode, index) => {
      expect(episode).toEqual(`Episode ${index + 1}`);
    });
  });

  test("should match snapshot", async () => {
    expect(page.retrieveDom()).toMatchSnapshot();
  });
});
