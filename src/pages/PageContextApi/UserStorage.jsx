import React from "react"

export const GlobalUserContext = React.createContext()

export const UserStorage = ({ children }) => {
  return (
    <GlobalUserContext.Provider value={{ nome: "Danilo Augusto" }}>
      {children}
    </GlobalUserContext.Provider>
  )
}
