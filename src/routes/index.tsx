import RootLayout from "@/layout/RootLayout"
import HomePage from "@/pages/Home"
import TypescriptPage from "@/pages/Typescript"
import UseStatePage from "@/pages/UseState"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    // caso hospede no gitpages, modificar rota para funcionar
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/use-state",
        element: <UseStatePage />,
      },
      {
        path: "/typecscript",
        element: <TypescriptPage />,
      },
    ],
  },
])
