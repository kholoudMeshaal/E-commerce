"use server"

import { getUserToken } from "@/app/myUtil";
import { productCartId, productCartQuantity } from "./AddToCart.interface";
import { revalidatePath } from "next/cache";

export async function handelAddProductToCart(data: productCartId){

// token logic shared => function (myUtil.ts)


//     const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/cart`,{
//         method: "POST" ,
//         headers : {
//             token : (await getUserToken() as string) ,
//              'Content-Type': 'application/json' ,

//         } , 
//         body: JSON.stringify(data)
//     } )

//     const {status , message , numOfCartItems , cardId , data: {products , totalCartPrice}} = await response.json()

//     revalidatePath('/cart')

// return {status , message , numOfCartItems , cardId ,products , totalCartPrice}
// }
try {
        const token = await getUserToken();
        
       
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/cart`, {
            method: "POST",
            headers: {
                token: token as string,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            revalidatePath('/cart');
   
            return {
                status: result.status,
                message: result.message,
                numOfCartItems: result.numOfCartItems,
                cartId: result.data?._id,
                products: result.data?.products || [],
                totalCartPrice: result.data?.totalCartPrice || 0
            };
        } else {
            throw new Error(result.message || "Failed to add product");
        }
    } catch (error: any) {
        return { status: "error", message: error.message };
    }
}

export async function getUserCart(){



    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/cart`,{
        method: "GET" ,
        headers : {
            token : (await getUserToken() as string) ,
            

        } , 
        cache: 'force-cache',
        // next: {revalidate: 3} عندنا مشكله لو اليوزر زود في ال 3 ثواني دول 
       
    } )

    // const { cartId , numOfCartItems , data: {products , totalCartPrice} } = await response.json()


 
    // return { numOfCartItems , cartId ,products , totalCartPrice}
const result = await response.json()
const cartId = result?.cartId
const numOfCartItems = result?.numOfCartItems
const products = result?.data?.products ?? []
const totalCartPrice = result?.data?.totalCartPrice ?? 0

return { numOfCartItems, cartId, products, totalCartPrice }


  }


export async function deleteElementFromCart(productId: string) {

  
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/cart/${productId}`, {
       method: "DELETE" ,
        headers : {
            token : (await getUserToken() as string) ,
            

        } , 
    });

    const finalres = await res.json();

    if (res.ok) {
        revalidatePath('/cart')
      return finalres.numOfCartItems
    } else {
      return { status: "error", message: finalres.message };
    }
  } catch (error) {
    return { status: "error", message: "Something went wrong" };
  }
}


export async function updateProductCount(data:productCartQuantity , productId : string ) {
 
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v2/cart/${productId}`, {
      method: "PUT",
      headers: {
        token: (await getUserToken() as string),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const finalres = await res.json()

    //  كيشت وهو بعد ما اخلص هيروح يكول الجيت يوزر داتا تاني ويشوف الجديد ويعرضهولي تاني 
    if (res.ok) {
      revalidatePath('/cart')
      return finalres
    }
  } 
