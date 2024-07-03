import { Box, Typography, Grid, Button } from "@mui/material";
import casamiento_1 from "../images/eventos/lfds.jpeg";

export const Events = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        color: "black",
        padding: "80px 0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ marginBottom: "50px", maxWidth: "90%", mx: "auto" }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: { xs: 3, md: 0 }, // Añade margen inferior en móviles y tabletas
          }}
        >
          <img
            src={casamiento_1}
            alt="casamiento en el Faena"
            style={{ maxWidth: "60%", height: "auto" }} // Hacer la imagen responsiva
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: { xs: 2, md: 0 } }}>
          <Typography variant="h5" fontFamily="Playfair Display" gutterBottom>
            Decoración de eventos
          </Typography>
          <Typography paragraph fontFamily="Playfair Display">
            Sobald der Wecker klingelt sitze ich kerzengerade und hellwach im
            Bett. Wenn ich nicht eh schon vor dem Wecker wach bin... Dafür gehe
            ich gerne früh ins Bett & bin niemand, der die Nacht durchmacht.
          </Typography>
          <Typography variant="h5" fontFamily="Playfair Display" gutterBottom>
            Sehr glücklich verheiratet
          </Typography>
          <Typography paragraph fontFamily="Playfair Display">
            Vor 13 Jahren habe ich die Liebe meines Lebens kennengelernt.
            Verrückt, wie die Zeit vergeht. 2020 haben wir im kleinen Kreis in
            der Toskana geheiratet und uns in einer freien Trauung das Ja-Wort
            gegeben.
          </Typography>
          <Typography variant="h5" fontFamily="Playfair Display" gutterBottom>
            Durch und durch Ästhetin
          </Typography>
          <Typography paragraph fontFamily="Playfair Display">
            Ich liebe gutes Design und schöne Dinge. Und das nicht nur als
            Fotografin, sondern auch privat. Wenn es um mich herum schön
            aussieht fühle ich mich gleich ein Stückchen wohler!
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-evenly"
        sx={{ padding: { xs: 2, md: 10 }, maxWidth: "90%", mx: "auto" }}
      >
        <Grid item xs={12} md={4}>
          <Typography
            variant="h5"
            textAlign="center"
            fontFamily="Playfair Display"
            gutterBottom
          >
            Decoración de eventos
          </Typography>
          <Typography
            textAlign="center"
            paragraph
            fontFamily="Playfair Display"
          >
            Sobald der Wecker klingelt sitze ich kerzengerade und hellwach im
            Bett. Wenn ich nicht eh schon vor dem Wecker wach bin... Dafür gehe
            ich gerne früh ins Bett & bin niemand, der die Nacht durchmacht.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Button size="large" variant="outlined">
            Contactanos
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
