import * as zod from "zod"



  export const schema = zod.object({
    name: zod.string().nonempty("Name Is Required"),
    email: zod.string().email("Enter Valid Email"),
    password: zod.string().regex(
        /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,
        "Enter Valid Password"
    ),
    rePassword: zod.string(),
    phone: zod.string().regex(/^01[0125][0-9]{8}$/, "Must be Egyptian Number")
}).refine(function(data) {
    return data.password === data.rePassword
}, {
    path: ["rePassword"],
    message: "Password and rePassword should be same"
})
