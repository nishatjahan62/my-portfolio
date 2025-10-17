import React from "react";
import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Home/Home";
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails";

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
  path: "project-details/:id",
  Component: ProjectDetails,
}

    ],
  },
]);

export default Routes;
