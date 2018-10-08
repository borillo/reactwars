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
      .numVotes("A New Hope")
      .then(votes => {
        currentVotes = votes;

        page.voteFilm("A New Hope");

        return page.numVotes("A New Hope");
      })
      .then(votes => {
        cy.wrap(votes).should("eq", currentVotes + 1);
      });
  });
});
