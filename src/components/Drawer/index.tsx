import {
  Container,
  GridOverflowProducts,
  Header,
  GridContainer,
  PriceContainer,
  BuyButton,
  MessageForEmptyCart,
} from "./styles";
import { AiOutlineClose, AiOutlineLoading3Quarters } from "react-icons/ai";
import { CardCart } from "../CardCart";
import {
  addToCart,
  removeAllSameProductsFromCart,
  removeFromCart,
  selectCartToRender,
} from "../../features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

interface IDrawerProps {
  setDrawer: (prop: boolean) => void;
  drawer: boolean;
}

export const Drawer = ({ setDrawer, drawer }: IDrawerProps) => {
  const dispatch = useAppDispatch();

  const cartToRender = useAppSelector(selectCartToRender);

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
          {cartToRender.length > 0 ? (
            cartToRender.map((item, index) => (
              <CardCart
                addToCartFunction={() => dispatch(addToCart(item))}
                removeFromCartFunction={() => dispatch(removeFromCart(item))}
                removeAllFromCartFunction={() =>
                  dispatch(removeAllSameProductsFromCart(item))
                }
                name={item.name}
                photo={item.photo}
                price={item.totalPrice}
                quantity={item.quantity}
                key={index}
              />
            ))
          ) : (
            <MessageForEmptyCart>
              <h4>Você ainda não possui nenhum item no seu carrinho</h4>
              <AiOutlineLoading3Quarters />
            </MessageForEmptyCart>
          )}
        </GridOverflowProducts>
      </GridContainer>
      <PriceContainer>
        <h3>Total:</h3>
        <span>
          {cartToRender
            .reduce((acc, atual) => acc + atual.totalPrice, 0)
            .toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
        </span>
      </PriceContainer>
      <BuyButton>Finalizar Compra</BuyButton>
    </Container>
  );
};
