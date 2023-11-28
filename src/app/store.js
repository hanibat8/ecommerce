import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from '../components/categorySlice';

export const store=configureStore({
    reducer:{
        category:categoryReducer
    }
})