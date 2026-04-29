// create slice

import { createSlice } from "@reduxjs/toolkit";
import { count } from "console";



const counterSlice = createSlice({
    name: 'counterSlice' , 
    initialState: {
        count: 0
    }
})



export default counterSlice.reducer