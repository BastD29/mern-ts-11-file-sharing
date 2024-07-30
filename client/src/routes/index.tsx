import { RouteObject } from "react-router-dom";
import { DashboardLayout, Home, NotFound } from "./routes";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [{ path: "", element: <Home /> }],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
