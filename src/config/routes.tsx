import { createBrowserRouter } from "react-router";
import App from '../App.tsx';
import LandingPage from "../pages/LandingPage.tsx";
// import Home from "../pages/home.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      // { dynamic loading
      // path: '/',
      // element: <LandingPage />
      // lazy: {
      //   loader: async () =>
      //     (await import("../packages/index.ts")).LayoutLoader,
      //   // action: async () =>
      //   //   (await getData()),
      //   Component: async () => {
      //     return (await import('../pages/LandingPage.tsx')).default
      //   }

      // }
      // }
    ],
  },
]);
