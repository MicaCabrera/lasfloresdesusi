import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const TopBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        color: "white",
        height: "30px",
      }}
    >
      <Typography variant="body1" component="div" fontFamily={"bodoni"}>
        Envío gratis a Capital Federal
      </Typography>
    </Box>
  );
};
