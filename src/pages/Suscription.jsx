import { Typography, Box } from "@mui/material";

export const Suscription = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <Typography
        variant="h2"
        sx={{ color: "black", backgroundColor: "yellow", padding: 2 }}
      >
        SUSCRIPCIONES
      </Typography>
    </Box>
  );
};
