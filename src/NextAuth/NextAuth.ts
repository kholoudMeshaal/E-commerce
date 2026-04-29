// import { jwtDecode } from "jwt-decode";
// import { NextAuthOptions } from "next-auth";
// import { decode } from "next-auth/jwt";
// import Credentials from "next-auth/providers/credentials";
// import Google from "next-auth/providers/google";
// import FacebookProvider from "next-auth/providers/facebook";


// export const nextAuthConfig : NextAuthOptions ={
 
//     providers: [
//         Credentials({
//             name: "login to Fresh Cart" , 
//             credentials : {
// email:{placeholder: "Write Your Email" , type: "email"}  , 
// password : {type: 'password'} , 
//             } , 
//             authorize:  async function(credentials){
//                 // call api 
//                 // data = credentials
//                 //must  return null(problem) | object(auth)
//                   const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signin`, {
//     method: "POST",
//     headers: {
//       "content-type": "application/json"
//     },
//     body: JSON.stringify(credentials)

   
//   })




//   const resData = await response.json()

//    const x = jwtDecode(resData.token)

//   if (resData.message == "success"){
//     const {role , ...userData} = resData.user
//     //  عشان لما يرجع يرجع ال 3 مع بعض (...)
//     //  ده الاوبجيكت الي بيرجع من اللوجين الصح
//     return { 
//   ...userData, 
//   id: (x as any).id, 
//   userTKN: (resData as any).token 
// }
//   } 
// return null


//             }
//         }) , 
//        Google({
//     clientId: process.env.GOOGLE_CLIENT_ID!,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
// }) ,
// FacebookProvider({
//   clientId: process.env.FACEBOOK_CLIENT_ID!,
//   clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
// }),
//     ] ,

    
//     pages:{
//         signIn:"/login"
//     }, 

// //     callbacks: { 

// //       jwt: function({user , token}){
// // //  when ? after navigate + successful login 
// // //  where ? server 

// // //  بياخد الاوبجيكت الي راجع من ال api وبيعمل اوبجيكت جديد
// // //  param.token => this is the object created by nextAuth (mutable)
// // //  param.user is object | undefiend return from call api

// // // credentialToken هي دي التوكين الحقيقي حمدلله علي السلامه ياهندسه
// // if (user){
// //   token.credentialToken = user.userTKN
 
// //   //  token.userId عشان تتم محتاجه اعمل لوج ان
// //   token.userId = user.id
// // }
// // // console.log("jwt param" , param)
// // return token
// //       }, 
// //       //  بعد كل عمليه محتاجه اعمل فيها authentication
// //       // use it | caLL when => 1- useSession , 2- getServerToken() , 3- req /api/auth/session
// //       // client => update ui
// //       //  return object  (return session)=> لما بترجعه يبقي اليوزر authen

// //       session: function(param){
// //         param.session.user.id = param.token.userId
// // console.log("session param" , param)
// // return param.session
// //       }
// //     },
//     // secret: {
//     //   maxAge : 
//     // }
    
// callbacks: {
//   jwt: async function({ user, token, account }) {
    
//     if (account?.provider === "google" || account?.provider === "facebook") {
   
//       const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/social-signin`, {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify({
//           email: user.email,
//           name: user.name,
//           provider: account.provider,
//           providerAccountId: account.providerAccountId,
//         }),
//       })

//       const resData = await response.json()

//       if (resData.token) {
//    const decoded = jwtDecode(resData.token) as any;
//         token.credentialToken = resData.token
//         token.userId = decoded.id
//       }
//     }

//     // Credentials login — زي ما كان
//     if (user?.userTKN) {
//       token.credentialToken = user.userTKN
//       token.userId = user.id
//     }

//     return token
//   },

//   session: function(param) {
//     param.session.user.id = param.token.userId
//     return param.session
//   }
// }

 
// } 
import { jwtDecode } from "jwt-decode";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

// 1. حل مشكلة الـ Types ليتعرف NextAuth على الحقول الجديدة
declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
  interface User {
    userTKN?: string; // التوكن القادم من الـ API الخاص بك
    id: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    credentialToken?: string;
    userId?: string;
  }
}

export const nextAuthConfig: NextAuthOptions = {
  providers: [
    Credentials({
      name: "login to Fresh Cart",
      credentials: {
        email: { placeholder: "Write Your Email", type: "email" },
        password: { type: 'password' },
      },
      authorize: async function (credentials) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signin`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(credentials)
        });

        const resData = await response.json();

        if (resData.message === "success") {
          const x = jwtDecode(resData.token) as any;
          const { role, ...userData } = resData.user;
          
          // نرجع الـ userTKN لكي نستلمه في الـ jwt callback
          return {
            ...userData,
            id: x.id,
            userTKN: resData.token 
          };
        }
        return null;
      }
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
  ],

  pages: {
    signIn: "/login"
  },

  callbacks: {
    jwt: async function ({ user, token, account }) {
      // تسجيل الدخول الاجتماعي (Google/Facebook)
      if (account?.provider === "google" || account?.provider === "facebook") {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/social-signin`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              email: user.email,
              name: user.name,
              provider: account.provider,
              providerAccountId: account.providerAccountId,
            }),
          });

          const resData = await response.json();

          if (resData.token) {
            const decoded = jwtDecode(resData.token) as any;
            token.credentialToken = resData.token;
            token.userId = decoded.id;
          }
        } catch (error) {
          console.error("Social Sign-in Error:", error);
        }
      }

      // تسجيل الدخول العادي (Credentials)
      // ملاحظة: الـ user يكون متاحاً فقط في أول مرة يتم فيها تسجيل الدخول
      if (user) {
        token.credentialToken = user.userTKN;
        token.userId = user.id;
      }

      return token;
    },

    session: function ({ session, token }) {
      if (session.user) {
        session.user.id = token.userId;
      }
      return session;
    }
  },
  
  // ضروري جداً لعمل الـ Production
  secret: process.env.NEXTAUTH_SECRET, 
};