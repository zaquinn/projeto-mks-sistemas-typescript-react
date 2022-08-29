import {
  Container,
  Image,
  QuantityContainer,
  QuantitySelector,
  PriceSpan,
  CloseButton,
  PriceQuantityContainer,
} from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../features/products/productsSlice";

interface IPropsCard {
  name: string;
  price: number;
  photo: string;
  quantity: number;
  addToCartFunction: () => PayloadAction<IProduct>;
  removeFromCartFunction: () => PayloadAction<IProduct>;
  removeAllFromCartFunction: () => PayloadAction<IProduct>;
}

export const CardCart = ({
  name,
  photo,
  price,
  quantity,
  addToCartFunction,
  removeFromCartFunction,
  removeAllFromCartFunction,
}: IPropsCard) => {
  return (
    <Container>
      <Image src={photo} />
      <h3>{name}</h3>
      <PriceQuantityContainer>
        <QuantityContainer>
          <p>Qtd:</p>
          <QuantitySelector>
            <button onClick={removeFromCartFunction}>-</button>
            <span>{quantity}</span>
            <button onClick={addToCartFunction}>+</button>
          </QuantitySelector>
        </QuantityContainer>
        <PriceSpan>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </PriceSpan>
      </PriceQuantityContainer>
      <CloseButton onClick={removeAllFromCartFunction}>
        <AiOutlineClose />
      </CloseButton>
    </Container>
  );
};
