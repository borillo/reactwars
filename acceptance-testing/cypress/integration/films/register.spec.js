import FilmsPageObject from "../../pageobjects/FilmsPageObject";

describe("Non official Films", () => {
  let page;

  beforeEach(() => {
    page = new FilmsPageObject(cy);
    page.open();
  });

  it("should allow to register new films", () => {
    page.registerFilm({
      title: "Rogue One: A Star Wars Story",
      director: "Gareth Edwards",
      year: 2016,
      poster:
        "https://upload.wikimedia.org/wikipedia/en/d/d4/Rogue_One%2C_A_Star_Wars_Story_poster.png"
    });

    page.films().contains("Rogue One: A Star Wars Story");
  });
});
