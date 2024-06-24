import { Box, Button, Container, Typography } from "@mui/material";
// import backgroundImage from "../images/fondo.png";
import { LinksHome } from "../components/LinksHome";

export const Home = () => {
  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          backgroundColor: "#F2E4E4",
          // backgroundImage: `url(${backgroundImage})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          height: "80vh",
          display: "flex",
          opacity: 0.9,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margin: 0,
          padding: 0,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: "#314033",
            fontFamily: "'Lora', serif",
            textAlign: "center",
            marginBottom: 2,
          }}
        >
          Las flores de Susi
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#314033",
            fontFamily: "'Lora', serif",
            textAlign: "center",
            marginBottom: 7,
          }}
        >
          Los detalles importan
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#E4E5F2",
              color: "black",
              "&:hover": { backgroundColor: "#B0B0B0", color: "white" },
            }}
          >
            Ver tienda
          </Button>
        </Box>
      </Container>
      <LinksHome />
    </>
  );
};
