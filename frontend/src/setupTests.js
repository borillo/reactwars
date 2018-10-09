import expect from "expect";

expect.extend({
  toShowEpisodesInOrder(page) {
    const first = page.obtainFirstEpisode();
    const last = page.obtainLastEpisode();
    const numberOfFilms = page.numberOfFilms();

    if (first === "Episode 1" && last === `Episode ${numberOfFilms}`) {
      return { pass: true };
    }

    return {
      message: () => `expected ${received} to be ordered`,
      pass: false
    };
  }
});
