import FilmsPageObject from "../../pageobjects/FilmsPageObject";

context("Vote", () => {
  let page;

  beforeEach(() => {
    page = new FilmsPageObject(cy);
    page.open();
  });

  it("should be able to vote for a film", () => {
    let currentVotes;

    page
      .currentVotes("A New Hope")
      .then(text => {
        currentVotes = parseInt(text, 10);

        page.voteFilm("A New Hope");

        return page.currentVotes("A New Hope");
      })
      .then(text => {
        const newVotes = parseInt(text, 10);

        expect(newVotes).to.eq(currentVotes + 1);
      });
  });
});
