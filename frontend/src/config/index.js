import { buildRouter } from "./ConfigRouter";
import { buildStore } from "./ConfigStore";

export const build = app => buildRouter(buildStore(app));
