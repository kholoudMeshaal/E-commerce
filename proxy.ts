import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export async function proxy(req: NextRequest){
// param is request (backend request) , return backend response(page)
// 1- check auth => token (getToken() => only in middleware)

const pathName = req.nextUrl.pathname
//t = > معناه ان الراجل ده واقف في اللوجين او الريجيستر
const isAuth: boolean = pathName === '/login' || pathName === '/register'

const token = await getToken({req})

if(isAuth){
    if(token){
       return NextResponse.redirect(new URL('/', req.url))
    }
    return NextResponse.next() //الصفحه الي هو عايزها
}


if (token){
   return NextResponse.next()
}
return NextResponse.redirect(new URL('/login', req.url)) //login

}

// لو هو مش مسجل دخول ميقدرش يعمل حاجات معينه 
export const config = {
    matcher: ['/cart' , '/brands' , '/shop' , '/login' , '/register']
}