import { Typography } from "@mui/material";

const footerStyles = {
  backgroundColor: "#013548",
  color: "white",
  textAlign: "center",
};

export const Footer = () => {
  return (
    <footer style={footerStyles}>
      <Typography ccolor="white" padding={7}>
        © 2024 Las flores de Susi | Belgrano - Capital Federal | Argentina
      </Typography>
    </footer>
  );
};
