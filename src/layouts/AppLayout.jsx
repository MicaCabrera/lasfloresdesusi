import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

export const AppLayout = ({ children }) => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Nav />
      <Box
        sx={{
          flexGrow: 1,
          marginTop: "64px",
          marginBottom: "64px",
          overflowY: "auto",
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
