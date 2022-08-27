import { Container } from "./styles";
import { RiShoppingBag3Line } from "react-icons/ri";
import IphonePic from "../../assets/iphone-x.png";

export const Card = () => {
  return (
    <Container>
      <img src={IphonePic} alt="Foto Iphone X" />
      <div>
        <h2>Apple iPhoneX 128GB</h2>
        <span>R$899</span>
      </div>
      <p>Redesigned from scratch and completely revised.</p>
      <button>
        <div>
          <RiShoppingBag3Line />
        </div>
        COMPRAR
      </button>
    </Container>
  );
};
