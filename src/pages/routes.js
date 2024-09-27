import React from "react";
import Home from "./Home";
import ChooseLevel from "./ChooseLevel";
import Nonogram from "./Nonogram";
import ErrorPage from "./ErrorPage";
import { useRoutes } from "react-router-dom";


export const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/levels/:idPlayer",
    element: <ChooseLevel />
  },
  {
    path: "/level/:idPlayer/:id",
    element: <Nonogram/>
  },
  {
    path: "*",
    element: <ErrorPage />
  },
];

export const RoutesComponent = () => {
  let elementi = useRoutes(routes);
  return elementi;
}