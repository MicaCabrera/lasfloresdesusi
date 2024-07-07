import { Box, Typography, Grid, Button, Divider } from "@mui/material";
import casamiento_1 from "../images/eventos/lfds.jpeg";

export const Suscription = () => {
  return (
    <Box
      sx={{
        color: "black",
        padding: { xs: "10px 0", md: "20px 0" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Grid
        container
        sx={{
          justifyContent: "center",
          padding: { xs: 2, sm: 4, md: 0 },
          maxWidth: "90%",
          mx: "auto",
          textAlign: { xs: "center" },
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h2"
            fontFamily="Playfair Display"
            py={2}
            mb={2}
            gutterBottom
            textAlign="left"
          >
            Suscripciones
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: { xs: 3, md: 0 },
          }}
        >
          <img
            src={casamiento_1}
            alt="casamiento en el Faena"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            p: { xs: 2, sm: 4, md: 7 },
          }}
        >
          <Box>
            <Divider>
              <Typography
                variant="h5"
                fontFamily="Playfair Display"
                gutterBottom
              >
                Decoración floral
              </Typography>
            </Divider>
            <Typography variant="body2" fontFamily="Playfair Display" pb={7}>
              Sobald der Wecker klingelt sitze ich kerzengerade und hellwach im
              Bett. Wenn ich nicht eh schon vor dem Wecker wach bin... Dafür
              gehe ich gerne früh ins Bett & bin niemand, der die Nacht
              durchmacht.
            </Typography>
            <Divider>
              <Typography
                variant="h5"
                fontFamily="Playfair Display"
                gutterBottom
              >
                Ambientación
              </Typography>
            </Divider>
            <Typography variant="body2" fontFamily="Playfair Display" pb={7}>
              Vor 13 Jahren habe ich die Liebe meines Lebens kennengelernt.
              Verrückt, wie die Zeit vergeht. 2020 haben wir im kleinen Kreis in
              der Toskana geheiratet und uns in einer freien Trauung das Ja-Wort
              gegeben.
            </Typography>
            <Divider>
              <Typography
                variant="h5"
                fontFamily="Playfair Display"
                gutterBottom
              >
                Asesoramiento
              </Typography>
            </Divider>
            <Typography variant="body2" fontFamily="Playfair Display">
              Ich liebe gutes Design und schöne Dinge. Und das nicht nur als
              Fotografin, sondern auch privat. Wenn es um mich herum schön
              aussieht fühle ich mich gleich ein Stückchen wohler!
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          maxWidth: "90%",
          mx: "auto",
          my: { xs: 5, md: 10 },
          px: { xs: 2, sm: 4, md: 7 },
        }}
      >
        <Grid item xs={12} md={6} p={{ xs: 2, md: 7 }}>
          <Typography
            variant="h5"
            textAlign="center"
            fontFamily="Playfair Display"
            gutterBottom
          >
            Hablemos
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
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: { xs: 2, md: 0 },
          }}
        >
          <Button size="large" variant="outlined">
            Contactanos
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
