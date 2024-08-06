import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Bottoles from "./Components/Bottoles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Bottoles></Bottoles>,
    loader:()=> {return fetch("Bottole.json")}
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
