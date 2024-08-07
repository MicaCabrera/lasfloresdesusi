import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export const Spinner = () => {
  return (
    <Stack
      sx={{ color: "grey.500" }}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
      direction="row"
    >
      <CircularProgress color="secondary" />
    </Stack>
  );
};
