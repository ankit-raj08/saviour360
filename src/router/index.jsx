import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Contact from "../pages/Contact";
import Explore from "../pages/Explore";
import Features from "../pages/Features";
import Services from "../pages/Services";
import Industries from "../pages/Industries";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true,          element: <Home /> },
      { path: "signin",       element: <SignIn /> },
      { path: "contact",      element: <Contact /> },
      { path: "explore",      element: <Explore /> },
      { path: "features",     element: <Features /> },
      { path: "services",     element: <Services /> },
      { path: "industries",   element: <Industries /> },
    ],
  },
]);

export default router;
