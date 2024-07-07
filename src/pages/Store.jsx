import {
  Typography,
  Container,
  Grid,
  Box,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import aImage from "../images/a.jpg";

// <Box sx={{ mt: 2 }}>
//   <Button component={Link}> Ver Detalle</Button>
// </Box>

export const Store = () => {
  return (
    <Container maxWidth="90%" sx={{ py: 4 }}>
      <Typography variant="body2" align="center" sx={{ color: "#888", m: 2 }}>
        las flores de susi logo
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Box sx={{ bgcolor: "#fff", p: 2, boxShadow: 1, borderRadius: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
              Categorias
            </Typography>
            <TextField
              select
              label="Categoría"
              variant="outlined"
              size="small"
              fullWidth
              SelectProps={{ native: true }}
            >
              <option value="ramos">Ramos</option>
              <option value="arreglos">Arreglos</option>
              <option value="plantas">Plantas</option>
            </TextField>

            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#FFC165",
                  "&:hover": { backgroundColor: "#EECE91" },
                }}
              >
                Aplicar Filtros
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Productos */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {/* Ejemplo de producto */}
            <Grid
              component={Link}
              item
              xs={12}
              md={4}
              sx={{ textDecoration: "none" }}
            >
              <img
                src={aImage}
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
                <Typography gutterBottom>Nombre del Producto</Typography>
                <Typography variant="body2" sx={{ color: "#888" }}>
                  Descripción corta del producto.
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
                  $XX.XX
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
