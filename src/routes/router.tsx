import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../pages/HomePage";
import SearchDocs from "../pages/SearchDocs";

export const router = createBrowserRouter([
  {
    Component:App,
    path: "/",
    children:[
        {
            Component: HomePage,
            path:'/'
        },
        {
          Component:SearchDocs,
          path:'/search-docs'
        }
       
    ]
  },
]);