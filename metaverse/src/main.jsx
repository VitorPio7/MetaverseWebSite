import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import Pag1 from "./pages/Pag1";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/metaverse",
    element: <Pag1 />,
    errorElement: <ErrorPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
