import React from "react";
import GlobalStyle from "./styles/global";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};
