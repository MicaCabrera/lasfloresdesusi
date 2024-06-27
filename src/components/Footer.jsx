import { Typography } from "@mui/material";

const footerStyles = {
  backgroundColor: "black",
  color: "#F29C50",
  padding: "16px",
  textAlign: "center",
};

export const Footer = () => {
  return (
    <footer style={footerStyles}>
      <Typography color="white">
        © 2024 Las flores de Susi | Belgrano - Capital Federal| Argentina
      </Typography>
    </footer>
  );
};
