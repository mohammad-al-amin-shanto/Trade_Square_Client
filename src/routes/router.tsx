import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Items from "../pages/Items";
import ItemDetails from "../pages/ItemDetails";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "items", element: <Items /> }, 
      { path: "items/:id", element: <ItemDetails /> },
      { path: "about", element: <About /> },
    ],
  },
]);

export default router;