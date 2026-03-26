import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Roots";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import AppDetails from "../pages/AppDetails";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installation",
        element: <Installation> </Installation>,
      },
      {
        path: "/app/:id", 
        element: <AppDetails />,
      },
      {
        path: "/*", 
        element: <ErrorPage />,
      },
    ],
  },
]);