import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const publicRouter = [
  {
    element: Home,
    path: "/",
  },
  {
    element: Login,
    path: "/login",
  },
  {
    element: Register,
    path: "/register",
  },
];
