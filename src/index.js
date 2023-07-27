// ./src/index.js

import React from "react";
import { render } from "react-dom";
import { StrictMode } from "react"; // Importe StrictMode aqui
import Menu from "./components/Menu";
import data from "./data/recipes.json";

render(
  <StrictMode>
    <Menu recipes={data} />
  </StrictMode>,
  document.getElementById("root")
);
