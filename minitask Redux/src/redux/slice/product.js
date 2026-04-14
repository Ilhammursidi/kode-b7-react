import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    data: [],
    lastId:0,
    isLoading: false,
    isError: null
}

const listProduct = createSlice({
    name: "data",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.data.push({
                id: Date.now(),
                ...action.payload
            });
        },

        removeProduct: (state, action) => {
            state.data = state.data.filter(
                (item) => item.id !== action.payload
            );
        },

        updateProduct: (state, action) => {
            state.data = state.data.map((item) =>
                item.id === action.payload.id
                    ? { ...item, product: action.payload.product ?? item.product, stock: action.payload.stock ?? item.stock }
                    : item
            );
        }
    }
});
export const { addProduct, removeProduct, updateProduct } = listProduct.actions

export default listProduct.reducer