import {
  Card,
  CardMedia,
  Typography,
  CardActionArea,
  Grid,
  Container,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import qImage from "../images/a.jpg";

export const LinksHome = () => {
  const links = [
    { title: "Ramos", url: "/tienda", img: qImage },
    { title: "Arreglos", url: "/tienda", img: qImage },
    { title: "Plantas", url: "/tienda", img: qImage },
    { title: "Eventos", url: "/eventos", img: qImage },
  ];

  return (
    <Container sx={{ padding: 3 }}>
      <Grid container spacing={2} justifyContent="center">
        {links.map((link, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            >
              <CardActionArea
                component={Link}
                to={link.url}
                sx={{
                  position: "relative",
                  textDecoration: "none",
                  color: "inherit",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    "& $arrowIcon": {
                      transform: "scale(1.2)",
                    },
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={link.img}
                  alt={link.title}
                  sx={{ objectFit: "cover" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                    color: "#ffffff",
                    padding: "10px",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{ textTransform: "uppercase" }}
                  >
                    {link.title}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 10,
                    right: 10,
                    transition: "transform 0.3s ease-in-out",
                  }}
                >
                  <TrendingFlatIcon
                    sx={{ fontSize: 40, color: "#ffffff" }}
                    className="arrowIcon"
                  />
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
