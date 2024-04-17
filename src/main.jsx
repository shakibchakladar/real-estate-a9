import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./root/Root";
import Home from "./pages/Home";
// import EstDetails from "./pages/EstDetails";
import Login from "./components/Login";
import UpdateProfile from "./pages/UpdateProfile";
import About from "./pages/About";
import FirebaseProvider from "./firebaaseProvider/FirebaseProvider";
import Register from "./pages/Register";
import Contact from "./components/Contact";
import PrivateRoute from "./components/PrivateRoute";
import EstDetails from "./pages/EstDetails";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<NotFound></NotFound>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch("/src/data.json")
      },
      {
        path:"/details/:id",
        element:<PrivateRoute>
          <EstDetails></EstDetails>
        </PrivateRoute>,
        loader:()=>fetch("/src/data.json")
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/update",
        element:<UpdateProfile></UpdateProfile>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
    <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>
);
