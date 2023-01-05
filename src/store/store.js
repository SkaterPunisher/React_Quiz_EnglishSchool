import { configureStore } from "@reduxjs/toolkit";
import registrationSlice from '../features/registration'

export const store = configureStore({
    reducer: {
        registration: registrationSlice,
    },
}) 