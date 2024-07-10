import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { Store } from "../../pages/Store";
import { CartContext } from "../../context/CartContext";

// eslint-disable-next-line react/prop-types
export const CartDrawer = ({ open, onClose }) => {
  const { cart, totalPrice } = useContext(CartContext);

  const list = () => (
    <Box sx={{ width: 400 }} role="presentation">
      <Box component="h1">
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "Playfair Display",
            fontSize: "0.9em",
          }}
        >
          Mis productos
        </Typography>
      </Box>

      {cart.map((product) => (
        <Store product={product} key={product.id} />
      ))}
      <Box
        sx={{
          diplay: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        {cart.length ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: "5px",
            }}
          >
            <Typography sx={{ pr: "5px" }}> Total del carrito: </Typography>
            <Box> ${totalPrice} </Box>
          </Box>
        ) : (
          <p>El carrito está vacío</p>
        )}

        <Box>
          <Button
            sx={{
              fontSize: "12px",
              backgroundColor: "pink",
              p: "10px",
              m: "5px",
              color: "black",
              "&:hover": {
                backgroundColor: "cyan",
              },
            }}
          >
            Enviar compra
          </Button>{" "}
        </Box>
        <Box>
          <Button
            onClick={onClose}
            component={Link}
            to="/tienda"
            sx={{
              fontSize: "10px",
              p: "5px",
              m: "5px",
              "&:hover": {
                backgroundColor: "grey.200",
              },
            }}
          >
            seguir comprando
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box>
      <Drawer anchor="right" open={open} onClose={onClose}>
        {list("right")}
      </Drawer>
    </Box>
  );
};
