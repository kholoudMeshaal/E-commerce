"use client"

import { Plus } from "lucide-react"
import AppButton from "../shared/AppButton/AppButton"
import { handelAddProductToCart } from "./AddToCart.action"
import { toast } from "sonner"
import { useContext } from "react"
import { CartCreatedContext } from "@/Context/CartContext/CartContext"

export default function AddToCart({id} : {id:string}) {
 
 const {setCartCount} = useContext(CartCreatedContext)
 
    async function addProductToCart(){
toast.promise(handelAddProductToCart({productId: id}) , {
    loading: 'Add To Cart ....' , 
    success: function({status , message , numOfCartItems , cardId ,products , totalCartPrice}){
       setCartCount(numOfCartItems)
        return message
    } , 
    error: "Sorry Can't Add This Product "
})
    }
  return (
  <AppButton className="w-[80%] mx-auto" onClick={addProductToCart} >
 Add To Cart <Plus/> 
</AppButton>
  )
}
