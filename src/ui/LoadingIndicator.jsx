import { Box, CircularProgress } from "@mui/material";

function LoadingIndicator() {
  return (
    <Box
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      zIndex={5}
      color="#000"
      opacity="0.5" // Set the desired opacity
    >
      <CircularProgress color="primary" />
    </Box>
  );
}

export default LoadingIndicator;