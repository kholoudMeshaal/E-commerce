// route handler

import { nextAuthConfig } from "@/NextAuth/NextAuth";
import NextAuth from "next-auth";



const myRouterHandlerObject = NextAuth(nextAuthConfig)

export{myRouterHandlerObject as GET , myRouterHandlerObject as POST}