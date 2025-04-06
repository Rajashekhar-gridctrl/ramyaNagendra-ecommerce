import { createBrowserRouter } from "react-router";
import App from '../App.tsx';
import LandingPage from "../pages/LandingPage.tsx";
import { ProductList } from "../pages/product-list.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: LandingPage },
    ],
  },
  {
    path: "categories",
    Component: App,
    children: [
      { index: true, Component: ProductList }
    ],
  }
]);
