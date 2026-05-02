import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Items from "../pages/Items";
import ItemDetails from "../pages/ItemDetails";
import About from "../pages/About";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";
import AddItem from "../pages/AddItem";
import ManageItems from "../pages/ManageItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },

      { path: "items", element: <Items /> },
      { path: "items/:id", element: <ItemDetails /> },

      // ✅ Protected routes
      {
        path: "items/add",
        element: (
          <PrivateRoute>
            <AddItem />
          </PrivateRoute>
        ),
      },
      {
        path: "items/manage",
        element: (
          <PrivateRoute>
            <ManageItems />
          </PrivateRoute>
        ),
      },

      { path: "about", element: <About /> },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;