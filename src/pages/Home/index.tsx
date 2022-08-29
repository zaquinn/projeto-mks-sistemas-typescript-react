import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Vitrine } from "../../components/Vitrine";
import { Container } from "./styles";

export const Home = () => {
  return (
    <>
      <Container>
        <Header />
        <Vitrine />
        <Footer />
      </Container>
    </>
  );
};
