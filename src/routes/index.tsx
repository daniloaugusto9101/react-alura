import RootLayout from "@/layout/RootLayout"
import Home from "@/pages/home/Home"
import { createBrowserRouter } from "react-router-dom"

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
    ],
  },
])
