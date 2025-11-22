import { createBrowserRouter } from "react-router-dom"
import Home from "@/pages/Home"
import Alura from "@/pages/Alura"
import Contact from "@/pages/Contact"
import RootLayout from "@/layout/RootLayout"

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
        path: "/alura",
        element: <Alura />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
])
