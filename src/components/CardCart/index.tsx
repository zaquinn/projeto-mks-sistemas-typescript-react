import { Container, Image } from "./styles";
import IphonePic from "../../assets/iphone-x.png";

export const CardCart = () => {
  return (
    <Container>
      <Image src={IphonePic} />
      <h3>Apple iPhoneX 128GB</h3>
    </Container>
  );
};
