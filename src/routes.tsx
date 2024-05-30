import { createBrowserRouter } from "react-router-dom";
import App from "App";
import React from "react";
import { GlobalContextProvider } from 'contexts/Global';
import ErrorPage from "error_page";
import { SLContextProvider } from "contexts/SLC";
import Auth from "containers/Auth";
import { AuthProvider } from "contexts/Auth";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthProvider> <GlobalContextProvider children={<SLContextProvider><App /></SLContextProvider>}></GlobalContextProvider> </AuthProvider>,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: "/auth",
    element: <AuthProvider> <Auth /> </AuthProvider>,
    errorElement: <ErrorPage />,
    children: [],
  },
]);
