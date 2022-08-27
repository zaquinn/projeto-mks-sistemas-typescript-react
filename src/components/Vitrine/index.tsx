import { Card } from "../Card";
import { Container, Grid } from "./styles";

export const Vitrine = () => {
  return (
    <Container>
      <Grid>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_) => (
          <Card />
        ))}
      </Grid>
    </Container>
  );
};
