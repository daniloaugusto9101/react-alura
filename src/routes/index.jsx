import { createBrowserRouter } from "react-router-dom"
import Home from "@/pages/Home"
import Alura from "@/pages/Alura"
import PageUseState from "@/pages/PageUseState"
import RootLayout from "@/layout/RootLayout"
import PageUseRef from "@/pages/PageUseRef"
import PageContextApi from "@/pages/PageContextApi"
import PageTypescript from "@/pages/PageTypescript"

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
        path: "/useState",
        element: <PageUseState />,
      },
      {
        path: "/useRef",
        element: <PageUseRef />,
      },
      {
        path: "/context-api",
        element: <PageContextApi />,
      },
      {
        path: "/typecscript",
        element: <PageTypescript />,
      },
    ],
  },
])
