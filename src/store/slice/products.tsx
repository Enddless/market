import { createSlice } from '@reduxjs/toolkit';
import { TProductsBasket } from '../../types/types';

interface IInitialState {
  basket: TProductsBasket[];
}
const initialState: IInitialState = {
  basket: []
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addBasket: (state, action) => {
      const existingProduct = state.basket.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.count++;
      } else {
        state.basket.push({ ...action.payload, count: 1 });
      }
    },
    increment: (state, action) => {
      const existingProduct = state.basket.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.count++;
      }
    },
    decrement: (state, action) => {
      const existingProduct = state.basket.find((item) => item.id === action.payload.id);
      if (existingProduct && existingProduct.count > 1) {
        existingProduct.count--;
      }
    },
    deleteProduct: (state, action) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload.id);
    },
    order: (state) => {
      state.basket = [];
    }
  }
});

export const { addBasket, increment, decrement, deleteProduct, order } =
  productsSlice.actions;
export default productsSlice.reducer;
