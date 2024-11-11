import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "./cartSlice";

const cartStore = configureStore ({
    reducer: {
        cart: CartSlice,
    },
})

export default cartStore;