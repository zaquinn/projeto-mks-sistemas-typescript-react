import {
  InputContainer,
  Input,
  IconContainer,
  LabelInput,
  Container,
} from "./styles";
import { BsSearch } from "react-icons/bs";

export const SearchBar = () => {
  return (
    <Container>
      <LabelInput>
        Pesquise o nome do produto (até de trás pra frente se preferir... 😉)
      </LabelInput>
      <InputContainer>
        <IconContainer>
          <BsSearch />
        </IconContainer>
        <Input placeholder="Digite o nome do produto" />
      </InputContainer>
    </Container>
  );
};
