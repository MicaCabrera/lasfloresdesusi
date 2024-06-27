import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Avatar } from "@mui/material";
import logo from "../images/b.jpg";
import { CartDrawer } from "./CartDrawer";

const drawerWidth = 240;
const navItems = [
  { name: "Inicio", route: "/" },
  { name: "Tienda", route: "/tienda" },
  { name: "Eventos", route: "/eventos" },
  { name: "Suscripción", route: "/suscripciones" },
  { name: "Nosotras", route: "/nosotras" },
];

export const Nav = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [cartOpen, setCartOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleCartToggle = () => {
    setCartOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Avatar alt="Logo" src={logo} sx={{ width: 56, height: 56 }} />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItemButton
            key={item.name}
            component={Link}
            to={item.route}
            onClick={handleDrawerToggle}
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ top: "auto", boxShadow: "none" }}>
        <Toolbar
          sx={{ justifyContent: "space-between", backgroundColor: "white" }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Avatar src={logo} alt="Logo" />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.route}
                sx={{ color: "black", textDecoration: "none" }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
          <IconButton
            color="black"
            sx={{
              ml: { sm: 12 },
              order: { xs: 1, sm: 0 },
            }}
            onClick={handleCartToggle}
          >
            <ShoppingBagIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <CartDrawer open={cartOpen} onClose={handleCartToggle} />
    </Box>
  );
};
