import { buildRouter } from "./ConfigRouter";
import { buildStore } from "./ConfigStore";

import {
  render as testRender,
  cleanup as testCleanup
} from "react-testing-library";

export const build = app => buildRouter(buildStore(app));
export const render = app => testRender(build(app));
export const cleanup = testCleanup;
