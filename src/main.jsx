import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./AuthProvider/AuthProvider";
import HomeDetails from "./Pages/HomeDetils/HomeDetails";
import Error from "./Pages/Error/Error";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import UpdateProfile from "./Pages/UpdateProfile/UpdateProfile";
import Contact from "./Pages/Contact/Contact";
import UserProfile from "./Pages/UserProfile/UserProfile";
import Agent from "./Pages/Agent/Agent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/homes/:id",
        element: <PrivateRoute><HomeDetails></HomeDetails></PrivateRoute>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '/updateProfile',
        element:<UpdateProfile></UpdateProfile>
      },
      {
        path: '/userProfile',
        element:<UserProfile></UserProfile>
      },
      {
        path: '/agent',
        element:<Agent></Agent>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
