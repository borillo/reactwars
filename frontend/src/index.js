import React from "react";
import { render } from "react-dom";

import { build } from "./App/config";
import App from "./App";

render(build(<App />), document.getElementById("root"));
