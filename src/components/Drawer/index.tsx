import {
  Container,
  GridOverflowProducts,
  Header,
  GridContainer,
  PriceContainer,
  BuyButton,
} from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { CardCart } from "../CardCart";

interface IDrawerProps {
  setDrawer: (prop: boolean) => void;
  drawer: boolean;
}

export const Drawer = ({ setDrawer, drawer }: IDrawerProps) => {
  const closeDrawer = () => {
    setDrawer(false);
  };
  return (
    <Container drawer={drawer}>
      <Header>
        <div>
          <h2>Carrinho de compras</h2>
          <button onClick={closeDrawer}>
            <AiOutlineClose />
          </button>
        </div>
      </Header>
      <GridContainer>
        <GridOverflowProducts>
          <CardCart />
          <CardCart />
          <CardCart />
          <CardCart />
        </GridOverflowProducts>
      </GridContainer>
      <PriceContainer>
        <h3>Total:</h3>
        <span>R$798</span>
      </PriceContainer>
      <BuyButton>Finalizar Compra</BuyButton>
    </Container>
  );
};
