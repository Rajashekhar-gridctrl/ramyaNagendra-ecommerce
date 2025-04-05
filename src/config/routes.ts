import { createBrowserRouter } from "react-router";

export default createBrowserRouter([
  {
    path: "/",
    lazy: {
      loader: async () =>
        (await import("../packages")).LayoutLoader,
      // action: async () =>
      //   (await getData()),
      Component: async () => {
        return (await import('../App.tsx')).default
      }

    },
  },
]);