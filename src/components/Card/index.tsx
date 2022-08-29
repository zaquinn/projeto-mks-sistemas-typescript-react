import { Container } from "./styles";
import { RiShoppingBag3Line } from "react-icons/ri";
import { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../features/products/productsSlice";

interface IPropsCard {
  name: string;
  description: string;
  price: string;
  photo: string;
  addToCartFunction: () => PayloadAction<IProduct>;
}

export const Card = ({
  name,
  description,
  price,
  photo,
  addToCartFunction,
}: IPropsCard) => {
  return (
    <Container>
      <img src={photo} alt="Foto Iphone X" />
      <div>
        <h2>{name}</h2>
        <span>
          {Number(price).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <p>{description}</p>
      <button onClick={addToCartFunction}>
        <div>
          <RiShoppingBag3Line />
        </div>
        COMPRAR
      </button>
    </Container>
  );
};
