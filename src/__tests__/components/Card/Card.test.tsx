import React from "react";
import { screen } from "@testing-library/react";
import { Card } from "../../../components/Card";
import { renderWithProviders } from "../../../utils/test-utils";
import { setupStore } from "../../../app/store";
import { addToCart } from "../../../features/products/productsSlice";

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
      <Card
        name="Teste"
        description="Testando"
        photo="teste"
        price="teste"
        addToCartFunction={() => store.dispatch(addToCart(obj_teste))}
      />
    );

    expect(screen.getByText("Teste")).toBeInTheDocument();
  });
});
