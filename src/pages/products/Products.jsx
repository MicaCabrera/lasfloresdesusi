import { Box, Button, Divider, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Image from "../../images/a.jpg";

// eslint-disable-next-line react/prop-types
export const Products = ({ product }) => {
  // eslint-disable-next-line react/prop-types
  const { id, name, price, description } = product;

  return (
    <Grid item xs={12} md={4} sx={{ textDecoration: "none" }}>
      <img
        src={Image}
        alt="Producto"
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
        }}
      />
      <Box
        sx={{
          bgcolor: "#fff",
          p: 2,
          boxShadow: 1,
          textAlign: "left",
        }}
      >
        <Typography gutterBottom>{name}</Typography>
        <Typography variant="body2" sx={{ color: "#888" }}>
          {description}
        </Typography>
        <Divider
          sx={{
            width: "80px",
            margin: "12px 0px",
            backgroundColor: "#FFC165",
            height: "4px",
          }}
        />
        <Typography variant="h6" sx={{ mt: 1 }}>
          {price}
        </Typography>
        <Button component={Link} to={`/tienda/${id}`}>
          Ver
        </Button>
      </Box>
    </Grid>
  );
};
