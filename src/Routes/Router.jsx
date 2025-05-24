import {
  createBrowserRouter,
 
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import React from 'react';
 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
        path:'/',
        element:<Home></Home>,
        }
    ]
  },
]);