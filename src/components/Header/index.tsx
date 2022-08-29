import { Container } from "./styles";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import { Drawer } from "../Drawer";
import { useAppSelector } from "../../app/hooks";
import { selectCart } from "../../features/products/productsSlice";

export const Header = () => {
  const [drawer, setDrawer] = useState(false);

  const cart = useAppSelector(selectCart);

  const showDrawer = () => setDrawer(!drawer);
  return (
    <Container>
      <h1>
        MKS <span>Sistemas</span>
      </h1>

      <button onClick={showDrawer}>
        <div>
          <FaShoppingCart />
        </div>
        <span>{cart.length}</span>
      </button>
      {drawer && <Drawer setDrawer={setDrawer} drawer={drawer} />}
    </Container>
  );
};
