import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const CartDrawer = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: 300 },
      }}
    >
      <Box sx={{ width: 300, textAlign: "center" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          Productos
        </Typography>
        <Divider />
        <List>
          <ListItem>
            <ListItemText primary="Producto 1" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Producto 2" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

CartDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CartDrawer;
