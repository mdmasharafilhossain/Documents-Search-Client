import { createBrowserRouter } from "react-router";
import App from "../App";

export const router = createBrowserRouter([
  {
    Component:App,
    path: "/",
    element: <div>Hello World</div>,
  },
]);