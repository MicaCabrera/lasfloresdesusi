import {
  Typography,
  Container,
  Grid,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getAllProducts } from "../services/products";
import { Spinner } from "../components/Spinner";
import { Products } from "./products/Products";

export const Store = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const products = await getAllProducts();
        setLoading(false);
        setProducts(products);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    getData();
  }, []);

  return (
    <Container maxWidth="90%" sx={{ py: 4 }}>
      <Typography variant="body2" align="center" sx={{ color: "#888", m: 2 }}>
        Las Flores de Susi Logo
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Box sx={{ bgcolor: "#fff", p: 2, boxShadow: 1, borderRadius: 1 }}>
            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
              Categorías
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

        <Grid item xs={12} md={9}>
          {loading && <Spinner />}
          {error && <span>Se ha producido un error</span>}
          <Grid container spacing={3}>
            {products.map((product) => (
              <Products key={product.id} product={product} />
            ))}
            {!products.length && !loading && (
              <span>No hay productos para mostrar</span>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
