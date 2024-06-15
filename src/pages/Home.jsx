import { Container } from "@mui/material";
import "./pages.css";
import { Carrousel } from "../components/Carrousel";

export const Home = () => {
  return (
    <>
      <Container className="container-home" maxWidth="full" disableGutters>
        <Carrousel />
      </Container>
    </>
  );
};
