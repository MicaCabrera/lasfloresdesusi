// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { Box, Container } from "@mui/material";
// import Accordion from "@mui/material/Accordion";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import Typography from "@mui/material/Typography";

// export const Faq = () => {
//   const typographyStyle = {
//     fontWeight: "bold",
//   };

//   const accordionStyle = {
//     p: "10px",
//   };

//   const boxStyle = {
//     marginTop: "80px",
//   };

//   return (
//     <>
//       <Box sx={boxStyle}>
//         <Container maxWidth="lg">
//           <Typography
//             variant="h2"
//             mb={4}
//             color="black"
//             fontFamily="Lora"
//             textAlign="center"
//           >
//             Preguntas frecuentes
//           </Typography>
//         </Container>
//       </Box>
//       <Container sx={{ mb: "50px" }}>
//         <Typography variant="h3" mb={4} textAlign="left">
//           Suplementos
//         </Typography>
//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel1a-content"
//             id="panel1a-header"
//             sx={accordionStyle}
//           >
//             <Typography sx={typographyStyle}>
//               ¿Qué son los suplementos deportivos y para qué se utilizan?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>
//               Los suplementos deportivos son productos diseñados para
//               complementar la dieta y mejorar el rendimiento físico en
//               actividades deportivas. Se utilizan para proporcionar nutrientes
//               adicionales, como proteínas, vitaminas, minerales o aminoácidos,
//               que pueden ayudar en la recuperación muscular, aumentar la
//               energía, mejorar el enfoque y optimizar el crecimiento muscular.
//               <br />
//               Los suplementos deportivos pueden desempeñar un papel útil, pero
//               es esencial recordar que no sustituyen la importancia fundamental
//               de una alimentación adecuada y un entrenamiento efectivo para
//               lograr los mejores resultados en tu rendimiento y salud.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>

//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2a-content"
//             id="panel2a-header"
//             sx={accordionStyle}
//           >
//             <Typography sx={typographyStyle}>
//               ¿Cuáles son los suplementos más recomendados para ganar masa
//               muscular?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>
//               En nuestra tienda, ofrecemos una selección de suplementos que
//               pueden ser útiles para aquellos que buscan ganar masa muscular:{" "}
//               <br />
//               Proteína en polvo: Ideal para complementar la ingesta de proteínas
//               y favorecer la recuperación y el desarrollo muscular. <br />{" "}
//               Creatina: Un suplemento popular que puede mejorar el rendimiento
//               en ejercicios intensos y contribuir al aumento de la masa
//               muscular. <br /> BCAA (aminoácidos de cadena ramificada): Ayudan
//               en la recuperación muscular y pueden prevenir la descomposición de
//               proteínas durante el entrenamiento. <br /> Glutamina: Favorece la
//               recuperación después de entrenamientos intensos y puede respaldar
//               el sistema inmunológico. <br />
//               Beta-alanina: Puede aumentar la resistencia y retrasar la fatiga
//               muscular en sesiones de entrenamiento exigentes.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2a-content"
//             id="panel2a-header"
//             sx={accordionStyle}
//           >
//             <Typography sx={typographyStyle}>
//               ¿Puedo tomar suplementos sin consultar antes con un nutricionista
//               o médico?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>
//               Los suplementos son de venta libre y es posible tomarlos sin
//               consultar previamente con un nutricionista o médico aunque es
//               recomendable obtener orientación profesional para evaluar tu
//               situación personal ya que puede ayudarte a evitar posibles
//               interacciones con medicamentos, alergias o condiciones médicas
//               preexistentes.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>

//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2a-content"
//             id="panel2a-header"
//             sx={accordionStyle}
//           >
//             <Typography sx={typographyStyle}>
//               Soy diabético, ¿puedo tomar suplementos sin riesgo?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>
//               Si eres diabético algunos ingredientes como los carbohidratos o el
//               cromo, podrían afectar los niveles de azúcar en sangre. Sin
//               embargo, en nuestras etiquetas de producto encontrarás información
//               detallada sobre los ingredientes y posibles contraindicaciones
//               para personas con diabetes.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//       </Container>

//       <Container>
//         <Typography variant="h3" mb={4} textAlign="left">
//           Formas de pago
//         </Typography>
//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel1a-content"
//             id="panel1a-header"
//             sx={accordionStyle}
//           >
//             <Typography sx={typographyStyle}>
//               ¿Cómo comprar nuestros productos?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>
//               Las compras se realizan a través de WhatsApp. Una vez que
//               encuentres el producto que buscabas, agregalo al carrito y
//               envíanos tu compra la cual estaremos recibiendo a través de
//               WhatsApp.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2a-content"
//             id="panel2a-header"
//             sx={accordionStyle}
//           >
//             <Typography sx={typographyStyle}>
//               ¿Cuáles son las formas de pago?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>
//               Los pagos se realizan por transferencia bancaria o efectivo.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//       </Container>
//     </>
//   );
// };
import { Box, Typography, Grid, Button } from "@mui/material";
// import casamiento_1 from "../images/eventos/lfds.jpeg";

export const Faq = () => {
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
