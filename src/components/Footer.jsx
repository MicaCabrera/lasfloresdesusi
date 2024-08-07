import { Typography } from "@mui/material";

const footerStyles = {
  backgroundColor: "#2F2B2B",
  color: "white",
  textAlign: "center",
};

export const Footer = () => {
  return (
    <footer style={footerStyles}>
      <Typography color="white" padding={7}>
        © 2024 Las flores de Susi | Belgrano - Capital Federal | Argentina
      </Typography>
    </footer>
  );
};
