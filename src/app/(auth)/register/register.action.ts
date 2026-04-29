"use server"

import { cookies } from "next/headers"
import { RegisterResponse, UserDataType } from "./register"


export async function handelUserRegister (UserData : UserDataType): Promise <string | boolean> {
    const response = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signup` , {
    method: "POST" , 
    headers: {
        "content-type" : "application/json"
    } , 
    body: JSON.stringify(UserData),
})
const data: RegisterResponse = await response.json()

 const cookie = await cookies()
cookie.set('token' , data.token , {
    httpOnly: true , 
    maxAge: 60 * 60 *24 *15 , 
    sameSite: 'strict'
})


// console.log(cookie.get('token').value)
if (data.message == "success"){
    return true
}
return (data.message)

}