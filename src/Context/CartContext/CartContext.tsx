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
// "use client"
// import React, { createContext, useState, ReactNode, useContext } from 'react';

// // تعريف أنواع البيانات التي سيحتوي عليها الـ Context
// interface CartContextType {
//   cartCount: number;
//   setCartCount: React.Dispatch<React.SetStateAction<number>>;
  
// }

// // إنشاء الكونتيكست مع تحديد النوع
// export const CartCreatedContext = createContext<CartContextType | undefined>(undefined);

// export default function CartContextProvider({ children }: { children: ReactNode }) {
//   const [cartCount, setCartCount] = useState<number>(0);

//   return (
//     <CartCreatedContext.Provider value={{ cartCount, setCartCount }}>
//       {children}
//     </CartCreatedContext.Provider>
//   );
// }


// export const useCart = () => {
//   const context = useContext(CartCreatedContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartContextProvider");
//   }
//   return context;
// };
"use client"
import React, { createContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';




interface CartContextType {
  cartCount: number;

  setCartCount: Dispatch<SetStateAction<number>>;
  
}

export const useCart = () => {
  const context = React.useContext(CartCreatedContext);
  if (!context) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context; 
};

export const CartCreatedContext = createContext<CartContextType | undefined>(undefined);

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [cartCount, setCartCount] = useState(0);

  return (
    <CartCreatedContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartCreatedContext.Provider>
  );
}