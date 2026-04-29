// "use client"

// import AppButton from "@/components/shared/AppButton/AppButton"
// import { Field, FieldError, FieldLabel } from "@/components/ui/field"
// import { Input } from "@/components/ui/input"
// import { Controller, useForm } from "react-hook-form"
// import { sendUserData } from "./register.services"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { schema } from "./register.schema"
// import Link from "next/link"
// import { signIn } from "next-auth/react"



// export default function RegisterForm() {
// const {handleSubmit , control} = useForm({
//     defaultValues: {
//         name: '',
//         email: '', 
//         password: "",
//         rePassword: '',
//         phone: ''

//     }, 
//     resolver: zodResolver(schema)
// })


//   return (
//     <>
    
//   <div className="max-w-md mx-auto my-10 bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-gray-50">
//  <div className='text-5xl text-main-color text-center '> 
//        <span className="relative inline-block">
//         <span className="relative z-10 bg-linear-to-tr from-main-color via-green-700 to-emerald-400 bg-clip-text text-transparent">
//           Register
//         </span>
      
//         <svg className="absolute -bottom-4 left-0 w-full h-3 text-main-color/30" viewBox="0 0 100 20" preserveAspectRatio="none">
//           <path d="M0 10 Q25 0 50 10 T100 10" fill="none" stroke="currentColor" strokeWidth="4" />
//         </svg>
//       </span>
//         {/* Social Buttons */}
//         <div className="grid grid-cols-2 gap-4 mb-8 mt-8">
//           <button
//             type="button"
//             onClick={() => signIn("google")}
//             className="flex items-center justify-center gap-3 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-[0.98]"
//           >
//             <svg width="18" height="18" viewBox="0 0 24 24">
//               <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
//               <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
//               <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
//               <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
//             </svg>
//             Google
//           </button>
//           <button
//             type="button"
//             onClick={() => signIn("facebook")}
//             className="flex items-center justify-center gap-3 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-[0.98]"
//           >
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
//               <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//             </svg>
//             Facebook
//           </button>
//         </div>
      
//         {/* Divider */}
//         <div className="relative mb-8">
//           <div className="absolute inset-0 flex items-center px-1">
//             <div className="w-full border-t border-gray-100"></div>
//           </div>
//           <div className="relative flex justify-center text-[10px] uppercase tracking-[0.15em] font-bold text-gray-400">
//             <span className="bg-white px-4">Or continue with</span>
//           </div>
//         </div>
//  <form className="mt-5" onSubmit={handleSubmit(sendUserData)}>
//         {/* name */}
//       <Controller
//   name="name"
//   control={control}
//   render={({ field, fieldState }) => (
//     <Field data-invalid={fieldState.invalid}>
//       <FieldLabel htmlFor={field.name}>UserName</FieldLabel>
//       <Input
//         {...field}
//         id={field.name}
//         aria-invalid={fieldState.invalid}
//         placeholder="Write Your Name"
//         autoComplete="off"
//         type="text"
//         className="mb-5 focus-visible:ring-main-color"
//       />

//       {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
//     </Field>
//   )}
// />
// {/* email */}
//       <Controller
//   name="email"
//   control={control}
//   render={({ field, fieldState }) => (
//     <Field data-invalid={fieldState.invalid}>
//       <FieldLabel htmlFor={field.name}>Email</FieldLabel>
//       <Input
//         {...field}
//         id={field.name}
//         aria-invalid={fieldState.invalid}
//         placeholder="Write Your Email"
//         autoComplete="off"
//         type="email"
//         className="mb-5 focus-visible:ring-main-color"
//       />

//       {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
//     </Field>
//   )}
// />
// {/* password */}
//       <Controller
//   name="password"
//   control={control}
//   render={({ field, fieldState }) => (
//     <Field data-invalid={fieldState.invalid}>
//       <FieldLabel htmlFor={field.name}>Password</FieldLabel>
//       <Input
//         {...field}
//         id={field.name}
//         aria-invalid={fieldState.invalid}
//         placeholder="Write Your Password"
//         autoComplete="new-password"
//         type="password"
//         className="mb-5 focus-visible:ring-main-color"
//       />

//       {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
//     </Field>
//   )}
// />
// {/* re-password */}
//       <Controller
//   name="rePassword"
//   control={control}
//   render={({ field, fieldState }) => (
//     <Field data-invalid={fieldState.invalid}>
//       <FieldLabel htmlFor={field.name}>Confirm Password</FieldLabel>
//       <Input
//         {...field}
//         id={field.name}
//         aria-invalid={fieldState.invalid}
//         placeholder="Write Your Confirm Password"
//         autoComplete="off"
//         type="password"
//         className="mb-5 focus-visible:ring-main-color"
//       />

//       {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
//     </Field>
//   )}
// />
// {/* phone */}
//       <Controller
//   name="phone"
//   control={control}
//   render={({ field, fieldState }) => (
//     <Field data-invalid={fieldState.invalid}>
//       <FieldLabel htmlFor={field.name}>Phone Number</FieldLabel>
//       <Input
//         {...field}
//         id={field.name}
//         aria-invalid={fieldState.invalid}
//         placeholder="Write Your Phone Number"
//         autoComplete="off"
//         type="tel"
//         className="mb-5 focus-visible:ring-main-color"
//       />

//       {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
//     </Field>
//   )}
// />


// <AppButton className="w-full bg-main-color hover:bg-main-color/80" type="submit">Submit</AppButton>

    
    
   
//           <p className="text-center text-sm text-gray-500 mt-6">
//             Already have an account?
//             <Link href="/login" className="text-main-color font-bold hover:underline ml-1">
//               Login
//             </Link>
//           </p>
//     </form>

//     </div>
//       </div> 
    
   
   
//     </>
//   )
// }
"use client"

import AppButton from "@/components/shared/AppButton/AppButton"
import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Controller, useForm } from "react-hook-form"
import { sendUserData } from "./register.services"

import { zodResolver } from "@hookform/resolvers/zod"
import { schema } from "./register.schema"
import Link from "next/link"
import { signIn } from "next-auth/react"

export default function RegisterForm() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(schema),
  })

  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <div className="w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-2xl relative">

        {/* Top Wave Header */}
        <div className="relative bg-linear-to-br from-green-500 via-green-600 to-emerald-700 pt-10 pb-16 px-6 text-white">
          <h1 className="text-3xl font-bold mb-1">Sign Up</h1>
          <p className="text-green-100 text-sm">Create your account</p>

          {/* Wave SVG */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg
              viewBox="0 0 400 60"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="w-full h-14"
            >
              <path
                d="M0,30 C80,60 160,0 240,30 C320,60 370,10 400,20 L400,60 L0,60 Z"
                fill="white"
              />
              <path
                d="M0,45 C60,20 140,55 220,35 C300,15 360,50 400,40 L400,60 L0,60 Z"
                fill="rgba(255,255,255,0.3)"
              />
            </svg>
          </div>
        </div>

        {/* Form Content */}
        <div className="px-6 pt-2 pb-4">

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <button
              type="button"
              onClick={() => signIn("google")}
              className="flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-[0.98]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Google
            </button>
            <button
              type="button"
              onClick={() => signIn("facebook")}
              className="flex items-center justify-center gap-2 py-2 border border-gray-200 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-[0.98]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold text-gray-400">
              <span className="bg-white px-3">Or continue with</span>
            </div>
          </div>

          <form onSubmit={handleSubmit(sendUserData)} className="space-y-3">
            {/* name */}
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name} className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Username
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Write Your Name"
                    autoComplete="off"
                    type="text"
                    className="rounded-xl bg-gray-50 border-0 focus-visible:ring-2 focus-visible:ring-green-500 text-sm"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            {/* email */}
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name} className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Email
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Write Your Email"
                    autoComplete="off"
                    type="email"
                    className="rounded-xl bg-gray-50 border-0 focus-visible:ring-2 focus-visible:ring-green-500 text-sm"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            {/* password */}
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name} className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Password
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Write Your Password"
                    autoComplete="new-password"
                    type="password"
                    className="rounded-xl bg-gray-50 border-0 focus-visible:ring-2 focus-visible:ring-green-500 text-sm"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            {/* re-password */}
            <Controller
              name="rePassword"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name} className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Confirm Password
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Confirm Your Password"
                    autoComplete="off"
                    type="password"
                    className="rounded-xl bg-gray-50 border-0 focus-visible:ring-2 focus-visible:ring-green-500 text-sm"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            {/* phone */}
            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name} className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Phone Number
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Write Your Phone Number"
                    autoComplete="off"
                    type="tel"
                    className="rounded-xl bg-gray-50 border-0 focus-visible:ring-2 focus-visible:ring-green-500 text-sm"
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

            <AppButton
              className="w-full bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl py-2.5 font-semibold text-sm shadow-md shadow-green-200 transition-all active:scale-[0.98] border-0 mt-2"
              type="submit"
            >
              Sign Up
            </AppButton>

            <p className="text-center text-xs text-gray-400 pt-1 pb-2">
              Already have an account?{" "}
              <Link href="/login" className="text-green-600 font-bold hover:underline">
                Log In
              </Link>
            </p>
          </form>
        </div>

        {/* Bottom Wave */}
        <div className="relative bg-linear-to-br from-green-500 via-green-600 to-emerald-700 pt-10 pb-6 px-6">
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
            <svg
              viewBox="0 0 400 60"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="w-full h-10"
            >
              <path
                d="M0,30 C80,60 160,0 240,30 C320,60 370,10 400,20 L400,60 L0,60 Z"
                fill="white"
              />
            </svg>
          </div>

     
        </div>

      </div>
    </div>
  )
}