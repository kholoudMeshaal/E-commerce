"use server"
import { cookies } from "next/headers"
import { LoginFromShap } from "./Login.interface"

export async function sendUserDataLogin(data: LoginFromShap) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signin`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(data),
  })

  const resData = await response.json()

  if (resData.message === "success") {
    // const cookie = await cookies()
    // cookie.set("user-token", resData.token, {
    //   httpOnly: true,
    // })
    return true
  }

  throw new Error(resData.message)
}


// nextauth library 

// auth with credintial BN \ provider (facebook | google | linkedin | etc.....)
// fullstack => route handler
// app > api > esmo "auth" > [...id] > route.ts ((route handler))
//  lw 3mlt /api/auth/register/  => route 