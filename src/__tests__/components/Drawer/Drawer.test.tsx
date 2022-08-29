import React from "react";
import { render, screen } from "@testing-library/react";
import { Drawer } from "../../../components/Drawer";
import { renderWithProviders } from "../../../utils/test-utils";

describe("Drawer Component", () => {
  test("should be able to render an Drawer", () => {
    renderWithProviders(<Drawer drawer={true} setDrawer={() => {}} />);

    expect(screen.getByText("Carrinho de compras")).toBeInTheDocument();
  });
});
