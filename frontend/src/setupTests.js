import expect from "expect";

import { cleanup } from "react-testing-library";

afterEach(cleanup);

expect.extend({
  toShowEpisodesInOrder(page) {
    const first = page.obtainFirstEpisode();
    const last = page.obtainLastEpisode();
    const numberOfFilms = page.numberOfFilms();

    if (first === "Episode 1" && last === `Episode ${numberOfFilms}`) {
      return { pass: true };
    }

    return {
      message: () => `film list should be ordered`,
      pass: false
    };
  }
});
