
import { sendUserDataLogin } from "./Login.action";


// export async function handelLogin(data: { email: string, password: string })  {
// const message = await sendUserDataLogin(data)
// return message

// }

export async function handelLogin(data: { email: string, password: string }) {
  try {
    await sendUserDataLogin(data)
    return "Login Successfully"
  } catch (error: any) {
    throw error.message || "Something went wrong"
  }
}