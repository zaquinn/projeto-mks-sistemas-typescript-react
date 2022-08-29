import {
  InputContainer,
  Input,
  IconContainer,
  LabelInput,
  Container,
} from "./styles";
import { BsSearch } from "react-icons/bs";

interface ISearchBarProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
}

export const SearchBar = ({ onChange, searchValue }: ISearchBarProps) => {
  return (
    <Container>
      <LabelInput>
        Pesquise o nome do produto (até de trás pra frente se preferir... 😉)
      </LabelInput>
      <InputContainer>
        <IconContainer>
          <BsSearch />
        </IconContainer>
        <Input
          onChange={onChange}
          value={searchValue}
          placeholder="Digite o nome do produto"
        />
      </InputContainer>
    </Container>
  );
};
