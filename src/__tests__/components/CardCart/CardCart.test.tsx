import React from "react";
import { screen } from "@testing-library/react";
import { CardCart } from "../../../components/CardCart";
import { renderWithProviders } from "../../../utils/test-utils";
import { setupStore } from "../../../app/store";
import {
  addToCart,
  removeFromCart,
  removeAllSameProductsFromCart,
} from "../../../features/products/productsSlice";

describe("Card Component", () => {
  test("should be able to render an Card", () => {
    const store = setupStore();

    const obj_teste = {
      id: 1,
      name: "string",
      brand: "string",
      description: "string",
      photo: "string",
      price: "string",
      createdAt: "string",
      updatedAt: "string",
    };
    renderWithProviders(
      <CardCart
        price={30}
        name="Testando CardCart"
        photo="Teste"
        quantity={3}
        addToCartFunction={() => store.dispatch(addToCart(obj_teste))}
        removeFromCartFunction={() => store.dispatch(removeFromCart(obj_teste))}
        removeAllFromCartFunction={() =>
          store.dispatch(removeAllSameProductsFromCart(obj_teste))
        }
      />
    );

    expect(screen.getByText("Testando CardCart")).toBeInTheDocument();
  });
});
