import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import EastIcon from "@mui/icons-material/East";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import gImage from "../images/g.jpg";
import cImage from "../images/c.jpg";
import aImage from "../images/a.jpg";
import bImage from "../images/b.jpg";
import caImage from "../images/eventos/casamiento.jpeg";
import { LinksHome } from "../components/LinksHome";
import { Container } from "@mui/material";

const images = [
  { imgPath: gImage },
  { imgPath: cImage },
  { imgPath: aImage },
  { imgPath: bImage },
  { imgPath: caImage },
  { imgPath: cImage },
];

export const Home = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const numVisible = isMobile ? 1 : 3;
  const maxSteps = images.length;

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
    <>
      <Box sx={{ flexGrow: 1, position: "relative" }}>
        <Grid
          container
          spacing={2}
          sx={{
            height: "70px",
            backgroundColor: "white",
            color: "black",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        ></Grid>

        <Grid container spacing={2}>
          {images
            .slice(activeStep, activeStep + numVisible)
            .map((image, index) => (
              <Grid item key={index} xs={12} sm={4}>
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
          size="large"
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
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button
            variant="outlined"
            component={Link}
            to="/tienda"
            size="large"
            endIcon={<EastIcon sx={{ color: "white" }} />}
            sx={{
              color: "white",
              borderColor: "white",
              fontSize: "large",
              marginBottom: 2,
              "&:hover": {
                borderColor: "pink",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            Ver tienda
          </Button>
          <Button
            variant="outlined"
            component={Link}
            to="/eventos"
            size="large"
            endIcon={<EastIcon sx={{ color: "white" }} />}
            sx={{
              color: "pink",
              borderColor: "pink",
              fontSize: "large",
              "&:hover": {
                borderColor: "white",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            Eventos
          </Button>
        </Box>
      </Box>
      <Container sx={{ padding: 9 }}>
        <LinksHome />
      </Container>
    </>
  );
};
