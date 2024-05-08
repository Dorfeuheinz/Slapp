import { createBrowserRouter } from "react-router-dom";
import App from "App";
import React from "react";
import { GlobalContextProvider} from 'contexts/Global';
import ErrorPage from "error_page";
import LandingPage from "containers/LandingPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalContextProvider children={<LandingPage />}></GlobalContextProvider>,
    errorElement: <ErrorPage />,
    children: [],
  },
]);
