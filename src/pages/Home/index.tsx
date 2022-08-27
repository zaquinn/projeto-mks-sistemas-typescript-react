import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { Vitrine } from "../../components/Vitrine";
import { Container, InfoResult } from "./styles";

export const Home = () => {
  return (
    <>
      <Container>
        <Header />
        <SearchBar />
        <InfoResult>
          Exibindo resultados para: <span>Testeeeeeeeeeeeeee</span>
        </InfoResult>
        <Vitrine />
        <Footer />
      </Container>
    </>
  );
};
