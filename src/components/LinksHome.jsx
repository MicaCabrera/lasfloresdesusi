import { Grid, Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

export const LinksHome = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {/* Primera caja */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            width: { xs: "100%", md: "780px" },
            height: { xs: "auto", md: "810px" },
            backgroundColor: "#f0f0f0",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
            marginBottom: { xs: "20px", md: "0" },
            padding: "10px",
          }}
        >
          <Button
            component={Link}
            to="/ruta-a-tu-pagina"
            variant="contained"
            sx={{
              backgroundColor: "#f57c00",
              color: "#ffffff",
              width: "100px",
              height: "100px",
              mt: 2,
            }}
          >
            Botón
          </Button>
        </Box>
      </Grid>

      {/* Segunda caja */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            width: { xs: "100%", md: "780px" },
            height: { xs: "auto", md: "810px" },
            backgroundColor: "#f0f0f0",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
            marginBottom: { xs: "20px", md: "0" },
            padding: "10px",
          }}
        >
          <Button
            component={Link}
            to="/ruta-a-tu-pagina"
            variant="contained"
            sx={{
              backgroundColor: "#f57c00",
              color: "#ffffff",
              width: "100px",
              height: "100px",
              mt: 2,
            }}
          >
            Botón
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
