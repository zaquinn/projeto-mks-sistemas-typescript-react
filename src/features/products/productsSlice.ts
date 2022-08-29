import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { api } from "../../services/api";

export interface IProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export interface IProductCartToRender extends IProduct {
  quantity: number;
  totalPrice: number;
}

export interface IProductsState {
  products: IProduct[];
  loading: boolean;
  cart: IProduct[];
  cartToRender: IProductCartToRender[];
}

const initialState: IProductsState = {
  loading: true,
  products: [],
  cart: [],
  cartToRender: [],
};

export const getProductsFromApi = createAsyncThunk("get/products", async () => {
  const response = await api.get(
    "/products?page=1&rows=8&sortBy=id&orderBy=ASC"
  );

  return response.data.products;
});

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      state.cart.push(action.payload);
      const verifyUnicity = state.cart.filter(
        (item) => item.id === action.payload.id
      );
      if (verifyUnicity.length === 1) {
        state.cartToRender.push({
          ...action.payload,
          quantity: 1,
          totalPrice: Number(action.payload.price),
        });
      }
      const product = state.cartToRender.find(
        (product) => product.id === action.payload.id
      );

      const productsToCalculateTotalPrice = state.cart.filter(
        (product) => product.id === action.payload.id
      );

      if (product) {
        product.quantity = state.cart.filter(
          (product) => product.id === action.payload.id
        ).length;
        product.totalPrice = productsToCalculateTotalPrice.reduce(
          (acc, atual) => acc + Number(atual.price),
          0
        );
      }
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      const findProductToRemove = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );
      const removeProduct = state.cart.splice(findProductToRemove, 1);

      const checkHowManySameProductOnCart = state.cart.filter(
        (product) => product.id === action.payload.id
      );

      if (checkHowManySameProductOnCart.length === 0) {
        state.cartToRender = state.cartToRender.filter(
          (product) => product.id !== action.payload.id
        );
      }

      const findProductOnCartToRender = state.cartToRender.find(
        (product) => product.id === action.payload.id
      );

      if (findProductOnCartToRender) {
        findProductOnCartToRender.quantity =
          checkHowManySameProductOnCart.length;
      }

      const product = state.cartToRender.find(
        (product) => product.id === action.payload.id
      );

      const productsToCalculateTotalPrice = state.cart.filter(
        (product) => product.id === action.payload.id
      );

      if (product) {
        product.quantity = state.cart.filter(
          (product) => product.id === action.payload.id
        ).length;
        product.totalPrice = productsToCalculateTotalPrice.reduce(
          (acc, atual) => acc + Number(atual.price),
          0
        );
      }
    },
    removeAllSameProductsFromCart: (state, action: PayloadAction<IProduct>) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload.id
      );

      state.cartToRender = state.cartToRender.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getProductsFromApi.fulfilled,
        (state, action: PayloadAction<IProduct[]>) => {
          if (state.products.length === 0) {
            state.products = action.payload;
          }
          state.loading = false;
        }
      )
      .addCase(getProductsFromApi.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductsFromApi.rejected, (state) => {
        state.loading = true;
      });
  },
});

export const { addToCart, removeFromCart, removeAllSameProductsFromCart } =
  productsSlice.actions;

export const selectProducts = (state: RootState) => state.products.products;

export const selectCart = (state: RootState) => state.products.cart;

export const selectCartToRender = (state: RootState) =>
  state.products.cartToRender;

export const selectLoading = (state: RootState) => state.products.loading;

export default productsSlice.reducer;
