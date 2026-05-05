"use client"


import { SessionProvider } from "next-auth/react"
import React from "react"
import { Provider } from "react-redux"
import { myStore } from "../../../Redux/store/store"
import { CartContextProvider } from "@/Context/CartContext/CartContext"

export default function MySession({children}: {children : React.ReactNode}) {
  return (
<Provider store={myStore}>
      <CartContextProvider>
   <SessionProvider>{children}</SessionProvider>
   </CartContextProvider>
</Provider>
  )
}
