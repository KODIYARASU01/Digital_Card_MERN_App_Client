import "./App.css";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Recovery from "./components/Recovery";
import Profile from "./components/Profile";
import Password from "./components/Password";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Admin from "./components/Admin/Admin";
import Login from "./components/Login";
let router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
  {
    path: "/recovery",
    element: <Recovery />,
  },
  {
    path: "/password",
    element: <Password />,
  },

  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);
const App = () => {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
};

export default App;
