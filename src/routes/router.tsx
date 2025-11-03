import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    Component:App,
    path: "/",
    children:[
        {
            Component: HomePage,
            path:'/'
        }
    ]
  },
]);