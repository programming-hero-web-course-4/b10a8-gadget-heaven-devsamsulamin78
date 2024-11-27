import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import ProductCards from "../components/ProductCards";
import AllProducts from "../components/Allproducts";
import ViewDetails from "../components/ViewDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <ProductCards></ProductCards>,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/products/:category",
            element: <ProductCards></ProductCards>,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/allproducts",
        element: <AllProducts></AllProducts>,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/viewdetails/:productId",
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch("../products.json"),
      },
    ],
  },
]);

export default routes;
