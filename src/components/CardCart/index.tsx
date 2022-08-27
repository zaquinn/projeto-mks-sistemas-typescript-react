import {
  Container,
  Image,
  QuantityContainer,
  QuantitySelector,
  PriceSpan,
  CloseButton,
  PriceQuantityContainer,
} from "./styles";
import IphonePic from "../../assets/iphone-x.png";
import { AiOutlineClose } from "react-icons/ai";

export const CardCart = () => {
  return (
    <Container>
      <Image src={IphonePic} />
      <h3>Apple iPhoneX 128GB</h3>
      <PriceQuantityContainer>
        <QuantityContainer>
          <p>Qtd:</p>
          <QuantitySelector>
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </QuantitySelector>
        </QuantityContainer>
        <PriceSpan>R$899</PriceSpan>
      </PriceQuantityContainer>
      <CloseButton>
        <AiOutlineClose />
      </CloseButton>
    </Container>
  );
};
