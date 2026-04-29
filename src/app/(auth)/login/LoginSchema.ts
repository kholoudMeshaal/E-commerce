import * as zod from "zod"



  export const schemaLogin = zod.object({
   
    email: zod.string().email("Enter Valid Email"),
    password: zod.string().regex(
        /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
        "Enter Valid Password"
    ),
   
})
