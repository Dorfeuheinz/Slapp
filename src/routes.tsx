import { createBrowserRouter } from "react-router-dom";
import App from "App";
import Login from "containers/Login";
import React from "react";
import { GlobalContextProvider } from 'contexts/Global';
import ErrorPage from "error_page";
import { SLContextProvider } from "contexts/SLC";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalContextProvider children={<SLContextProvider><App /></SLContextProvider>}></GlobalContextProvider>,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
    children: [],
  },
]);
