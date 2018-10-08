import expect from "expect";

expect.extend({
  toShowEpisodesInOrder(page) {
    let first = page.obtainFirstEpisode();
    let last = page.obtainLastEpisode();

    if (first === "Episode 1" && last === "Episode 8") {
      return { pass: true };
    }

    return {
      message: () => `expected ${received} to be ordered`,
      pass: false
    };
  }
});
