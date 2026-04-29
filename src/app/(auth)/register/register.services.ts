import { toast } from "sonner";
import { RegisterResponse, UserDataType } from "./register";
import { handelUserRegister } from "./register.action";

export async function sendUserData(userData: UserDataType) {
// const response = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signup` , {
//     method: "POST" , 
//     headers: {
//         "content-type" : "application/json"
//     } , 
//     body: JSON.stringify(userData),
// })
// const data: RegisterResponse = await response.json()
// console.log(data.message)

const response = await handelUserRegister(userData)
if (response == true){
    toast.success("user Added Successfully" , {
        position: 'top-right'
    })
}else {
    toast.error(response) , {
         position: 'top-right'
    }
}
}