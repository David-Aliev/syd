import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminPage from "./pages/AdminPage/AdminPage";
import LogInPage from "./pages/LogInPage/LogInPage";

const router = createBrowserRouter([
  {
    path: "/evaluation",
    element: <App />,
  },
  {
    path: "/",
    element: <AdminPage />,
  },
  {
    path: "/login",
    element: <LogInPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
