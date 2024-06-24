import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import img1 from "../images/a.jpg";
import img2 from "../images/casamiento.jpeg";

export const LinksHome = () => {
  return (
    <Grid container spacing={2} justifyContent="center" p={4}>
      {/* Primera caja */}
      <Grid item xs={12} md={6}>
        <Box
          component={Link}
          to="/tienda"
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "300px", md: "600px" },
            backgroundImage: `url(${img1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "none",
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            RAMOS
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={6}>
        <Box
          component={Link}
          to="/eventos"
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "300px", md: "600px" },
            backgroundImage: `url(${img2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            textAlign: "end",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "none",
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            EVENTOS
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
