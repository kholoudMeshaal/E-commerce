'use server'
import { getUserToken } from "@/app/myUtil";
import { ShippingAddressType } from "./payment.interface";
import { revalidatePath } from "next/cache";

 

export async function handelCashOrder (shippingAddress: ShippingAddressType , cardId: string){

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/orders/${cardId}` , {
        method: 'POST' , 
        headers: {
            token : (await getUserToken() as string) , 
            "content-type" : 'application/json'
        } , 
        body: JSON.stringify(shippingAddress)
    })
const resData = await res.json()
revalidatePath('/cart')

}

export async function handelOnlineOrder(shippingAddress: ShippingAddressType, cardId: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/orders/checkout-session/${cardId}?url=http://localhost:3000`,
    {
      method: 'POST',
      headers: {
        token: (await getUserToken() as string),
        "content-type": 'application/json'
      },
      body: JSON.stringify(shippingAddress)
    }
  )

  const resData = await res.json()

  if (!res.ok || !resData.session?.url) {
    throw new Error(resData.message || 'Failed to create payment session')
  }

  return resData.session.url
}