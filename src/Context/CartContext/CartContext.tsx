'use client'
import React ,{ createContext, useState } from "react"

export const CartCreatedContext =createContext({cartCount: 0 , setCartCount: function(){} })
export default function CartContextProvider({children}: {children:React.ReactNode }) {
 
 const [cartCount , setCartCount] = useState<number>(0)
 
    return (
 <CartCreatedContext value={{cartCount , setCartCount}}>
    {children}
 </CartCreatedContext>
  )
}
