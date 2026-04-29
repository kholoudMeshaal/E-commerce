
import { configureStore } from '@reduxjs/toolkit';

import counter from '../slices/counter/counter'

//  بقي ليه الحق يغير في ال ستيت الي هناك بس بتاعت الكاونتر 0
export const myStore = configureStore({
    reducer: counter
})