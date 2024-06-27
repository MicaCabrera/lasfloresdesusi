import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import gImage from "../images/g.jpg";
import cImage from "../images/c.jpg";
import aImage from "../images/a.jpg";
import bImage from "../images/b.jpg";
import caImage from "../images/casamiento.jpeg";

const images = [
  { imgPath: gImage },
  { imgPath: cImage },
  { imgPath: aImage },
  { imgPath: bImage },
  { imgPath: caImage },
  { imgPath: cImage },
];

const textContent = {
  title: "Las flores de Susi",
  subtitle: "Los detalles importan",
};

export const Home = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const numVisible = 3;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      const nextStep = prevActiveStep + 1;
      return nextStep >= maxSteps ? prevActiveStep : nextStep;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? 0 : prevActiveStep - 1,
    );
  };

  const isNextDisabled = activeStep + numVisible >= maxSteps;

  return (
    <Box sx={{ flexGrow: 1, position: "relative" }}>
      <Grid
        container
        spacing={2}
        sx={{
          height: "100px",
          backgroundColor: "white",
          color: "black",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h5">{textContent.title}</Typography>
          <Typography variant="body1">{textContent.subtitle}</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        {images
          .slice(activeStep, activeStep + numVisible)
          .map((image, index) => (
            <Grid item key={index} xs={4}>
              <Box
                sx={{
                  position: "relative",
                  height: "80vh",
                  backgroundImage: `url(${image.imgPath})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Grid>
          ))}
      </Grid>

      <Button
        size="large"
        onClick={handleBack}
        sx={{
          position: "absolute",
          left: 0,
          bottom: "50%",
          transform: "translateY(50%)",
          color: "white",
          "& .MuiSvgIcon-root": {
            fontSize: "3rem",
          },
        }}
      >
        <KeyboardArrowLeft />
      </Button>
      <Button
        size="small"
        onClick={handleNext}
        disabled={isNextDisabled}
        sx={{
          position: "absolute",
          right: 0,
          bottom: "50%",
          transform: "translateY(50%)",
          color: "white",
          "& .MuiSvgIcon-root": {
            fontSize: "3rem",
          },
        }}
      >
        <KeyboardArrowRight />
      </Button>

      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          justifyContent: "center",
          backgroundColor: "transparent",
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          "& .MuiMobileStepper-dotActive": {
            backgroundColor: "pink",
          },
        }}
      />
    </Box>
  );
};
