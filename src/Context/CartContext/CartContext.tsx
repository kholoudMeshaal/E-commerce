// 'use client'
// import React ,{ createContext, useState } from "react"

// export const CartCreatedContext =createContext({cartCount: 0 , setCartCount: function(){} })
// export default function CartContextProvider({children}: {children:React.ReactNode }) {
 
//  const [cartCount , setCartCount] = useState<number>(0)
 
//     return (
//  <CartCreatedContext value={{cartCount , setCartCount}}>
//     {children}
//  </CartCreatedContext>
//   )
// }
"use client"
import React, { createContext, useState, ReactNode, useContext } from 'react';

// تعريف أنواع البيانات التي سيحتوي عليها الـ Context
interface CartContextType {
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

// إنشاء الكونتيكست مع تحديد النوع
export const CartCreatedContext = createContext<CartContextType | undefined>(undefined);

export default function CartContextProvider({ children }: { children: ReactNode }) {
  const [cartCount, setCartCount] = useState<number>(0);

  return (
    <CartCreatedContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartCreatedContext.Provider>
  );
}

// Hook مخصص لسهولة الاستخدام لاحقاً
export const useCart = () => {
  const context = useContext(CartCreatedContext);
  if (!context) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};