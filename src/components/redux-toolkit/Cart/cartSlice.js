import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice ({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addToCart : (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.Name,
                    image: newItem.image,
                    price: newItem.price,
                    category : newItem.cat,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = +existingItem.totalPrice + +newItem.price;
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        },
        calculateTotal: (state) => {
            state.totalPrice= state.items.reduce((total, item) => +total + +item.totalPrice, 0);
        }
    }
})

export const {addToCart, removeFromCart , calculateTotal} = CartSlice.actions;
export default CartSlice.reducer;