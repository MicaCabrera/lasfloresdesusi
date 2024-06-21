import { Box, Button, Container, Typography } from "@mui/material";
import backgroundImage from "../images/pajaros.jpg";

export const Home = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "end",
        height: "calc(100vh - 64px)",
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
          color: "white",
          fontFamily: "'Lora', serif",
          textAlign: "center",
          marginBottom: 2,
        }}
      >
        Las flores de Susi
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
          sx={{ backgroundColor: "#F29C50" }}
        >
          Ver más
        </Button>
      </Box>
    </Container>
  );
};
