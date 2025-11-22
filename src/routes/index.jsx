import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import RootLayout from "../layout/RootLayout"

export const router = createBrowserRouter([
  {
    // caso hospede no gitpages, modificar rota para funcionar
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
])
